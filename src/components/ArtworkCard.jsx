import {React, useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import Link from "next/link";

export default function ArtworkCard({objectID}){
    const [data, setData] = useState([])
    useEffect( () => {
        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    })

    let newImage = ""
    {data.primaryImageSmall ? newImage = data.primaryImageSmall : newImage = "https://via.placeholder.com/375x375.png?text=[+Not+Available+]"}

    let newTitle = ""
    {data.title ? newTitle = data.title : newTitle = "N/A"}

    let newDate = ""
    {data.objectDate ? newDate = data.objectDate : newDate = "N/A"}

    let newClassification = ""
    {data.classification ? newClassification = data.classification : newClassification = "N/A"}

    let newMedium = ""
    {data.medium ? newMedium = data.medium : newMedium = "N/A"}
    

    return(<>
        <Card style={{width: '17rem'}}>
            <Card.Body>
                <Card.Img variant="top" src={newImage} /> 
                <Card.Title>{newTitle}</Card.Title>
                <Card.Text>
                    <b>Date:</b> {newDate} <br/>
                    <b>Classification:</b> {newClassification} <br/>  
                    <b>Medium:</b> {newMedium}<br/>
                </Card.Text> 
                    <Link href={`/artwork/${objectID}`}>
                        <button class="btn btn-primary">ID: {objectID}</button>
                    </Link>
            </Card.Body> 
        </Card>        
    </>)
}
