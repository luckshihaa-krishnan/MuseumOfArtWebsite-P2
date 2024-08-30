import {React, useState, useEffect} from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Error from "next/error";
import { Row,Col, Card } from "react-bootstrap";
import ArtworkCard from "@/src/components/ArtworkCard";
import Link from "next/link";
import { Pagination } from "react-bootstrap";
import validObjectIDList from '@/public/data/validObjectIDList.json'


const PER_PAGE = 12

export default function ArtWork(){
    const [artworkList, setArtworkList] = useState('');
    const [page, setPage] = useState(1);

    const router = useRouter();
    let finalQuery = router.asPath.split('?')[1];

    const { data, error} = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/search?${finalQuery}`)

    function previousPage(){
        {page > 1 && (setPage(page - 1))}
    }

    function nextPage(){    
        {page < artworkList.length && (setPage(page + 1))}
    }

    useEffect( () => {
        let results = []
        let filteredResults = validObjectIDList.objectIDs.filter(x => data?.objectIDs?.includes(x));
        for (let i = 0; i < filteredResults.length; i += PER_PAGE) {
            const chunk = filteredResults.slice(i, i + PER_PAGE);
            results.push(chunk);
        }        
        setArtworkList(results)   
        setPage(1);       
    },[data])

    {error && <Error statusCode={404}/>}


    return(<>
        <Row className="gy-4">
            {artworkList.length > 0
                &&
                (
                    artworkList[page - 1].map((currentObjectID)=>{
                        return (<Col lg={3} key={currentObjectID}><ArtworkCard objectID={currentObjectID}/></Col>)
                    })
                ) 
            }

            {artworkList.length == 0
                &&
                (
                    <Card style={{width: '100rem'}}>
                        <Card.Body>
                            <Card.Title><h4>Nothing Here</h4></Card.Title>
                            <Card.Text>
                                Try searching for something else
                            </Card.Text>
                            <Link href="/search" passHref legacyBehavior>Back to Search</Link>
                        </Card.Body>
                    </Card>
                )
            }
        </Row>
        <br/>
        {artworkList.length > 0
            &&
            (
                <Row>
                    <Col>
                        <Pagination>
                            <Pagination.Prev onClick={previousPage}/>
                            <Pagination.Item>{page}</Pagination.Item>
                            <Pagination.Next onClick={nextPage}/>
                        </Pagination> 
                    </Col>
                </Row>
            )
        }
        
    </>)
}