import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Card, CardColumns, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import BreedDetailCard from './BreedDetailCard';
import './BreedDetails.css';

const BreedDetails = () => {
    const {breedName} = useParams();
    const [breedImages, setbreedImages] = React.useState([]);

    useEffect(() => {
        let mounted = true;
        if(mounted) {
            axios.get(`https://dog.ceo/api/breed/${breedName}/images`)
                .then((res) => {
                    setbreedImages(res.data.message);
                })
            }
        return () => mounted = false;
    }, [breedImages]);

    const images = breedImages.map((image) => <BreedDetailCard dogPicture={image} />);
    

    return(
        <Container>
            <h1 className="c-breed-detail-header text-capitalize">{breedName}</h1>
            <CardColumns>  
                {images}
            </CardColumns>
        </Container>
    );

}

export default BreedDetails;