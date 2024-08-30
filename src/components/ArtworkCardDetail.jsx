import {React, useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import { useAtom } from "jotai";
import { favouritesAtom } from "@/store";
import Button from "react-bootstrap/Button";

export default function ArtworkCardDetail({objectID}){ 
    const [data, setData] = useState([])
    const [favouritesList, setFavouritesList] = useAtom(favouritesAtom)

    const [showAdded, setShowAdded] = useState(favouritesList.includes(objectID))

    function favouritesClicked(){
        if (showAdded){
            setFavouritesList(current => current.filter(fav => fav != objectID));
            setShowAdded(false);
        }
        else{
            setFavouritesList(current => [...current, objectID]);
            setShowAdded(true);
        }
    }

    useEffect( () => {
        fetch(objectID ? `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}` : null)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    })

    
    return(<>
     <Card style={{width: '70rem'}}>
            <Card.Body>
                <Card.Img variant="top" src={data.primaryImage} /> 
                <Card.Title>{data.title || "N/A"}</Card.Title>
                <Card.Text>
                    <b>Date:</b> {data.objectDate || "N/A"} <br/>
                    <b>Classification:</b> {data.classification || "N/A"} <br/>  
                    <b>Medium:</b> {data.medium || "N/A"} 
                    <br/><br/>
                    <b>Artist: </b>{data.artistDisplayName || "N/A"} ( <a href={data.artistWikidata_URL} target="_blank" rel="noreferrer" >wiki</a> )
                    <br/>
                    <b>Credit Line: </b> {data.creditLine || "N/A"}
                    <br/>
                    <b>Dimensions: </b> {data.dimensions || "N/A"}
                    <br/><br/>
                    <Button variant={showAdded ? 'primary' : 'outline-primary'} onClick={favouritesClicked}>{showAdded ? '+Favourite (added)' : '+Favourite'}</Button>
                </Card.Text>  
            </Card.Body> 
        </Card>       
    </>)
}


