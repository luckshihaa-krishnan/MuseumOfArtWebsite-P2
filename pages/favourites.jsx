import {React} from "react";
import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";
import { Row,Col, Card } from "react-bootstrap";
import ArtworkCard from "@/src/components/ArtworkCard";



export default function Favourites(){
    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom)
    return(<>
        <Row className="gy-4">
        {favouritesList.length === 0
        ?
        (
            <Card style={{width: '70rem'}}>
                <Card.Body>
                    <Card.Title><h4>Nothing Here</h4></Card.Title>
                        <Card.Text>
                            Try searching for something else
                        </Card.Text>
                </Card.Body>
            </Card>
        )
        :( 
            favouritesList.map((currentObjectID)=>{
                return (<Col lg={3} key={currentObjectID}><ArtworkCard objectID={currentObjectID}/></Col>)
            })
        )
        }
        </Row>
        <br/>
    </>)

}