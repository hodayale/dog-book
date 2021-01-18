import axios from 'axios';
import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';

const DogCard = (props) => {
    const {dogBreed, dogPicture} = props;
    //const [dogPicture, setdogPicture] = React.useState(undefined);

    // useEffect(() => {
    //     let mounted = true;
    //     if(mounted) {
    //         axios.get(`https://dog.ceo/api/breed/${dogBreed}/images/random`).then((dogRes) => {
    //                     setdogPicture(dogRes.data.message);
    //                 });
    //     }
    //     return () => mounted = false;
    // }, [dogPicture]);

    return(
        <Card style={{ width: '18rem' }}>   
            <Card.Body>
                <Card.Title>{dogBreed}</Card.Title>
                <Card.Img variant="top" src={dogPicture} />
            </Card.Body>
        </Card>
    );
}

export default DogCard;