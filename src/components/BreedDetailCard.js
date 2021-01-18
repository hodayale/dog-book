import React from 'react';
import { Card } from 'react-bootstrap';

const BreedDetailCard = (props) => {
    const {dogPicture} = props;
    
    return(
        <Card style={{ width: '18rem' }}>   
            <Card.Body>
                <Card.Img variant="top" src={dogPicture} />
            </Card.Body>
        </Card>
    );
}

export default BreedDetailCard;