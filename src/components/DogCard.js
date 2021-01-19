//import axios from 'axios';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const DogCard = (props) => {
    const {filter, dogBreed, dogPicture} = props;
    //const [dogPicture, setdogPicture] = React.useState(undefined);
    const [redirect, setRedirect] = React.useState(false);

    const navigateToBreed = () => {
        setRedirect(true);
    }

    if(redirect) {
        return (<Redirect push to={`/breeds/${dogBreed}`}/>)
    }

    // if(dogPicture === undefined) {
    //     axios.get(`https://dog.ceo/api/breed/${dogBreed}/images/random`).then((dogRes) => {
    //                 setdogPicture(dogRes.data.message);
    //     });
    // }

    return(
        <Card style={{ width: '18rem', display: dogBreed.toLowerCase().includes(filter.toLowerCase()) ? "" : "none"}} onDoubleClick={navigateToBreed}>   
            <Card.Body>
                <Card.Title className="text-capitalize">{dogBreed}</Card.Title>
                <Card.Img variant="top" src={dogPicture} />
            </Card.Body>
        </Card>
    );
}

export default DogCard;