import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { CardColumns, Container } from 'react-bootstrap';
import axios from 'axios';
import BreedDetailCard from './BreedDetailCard';
import './BreedDetails.css';

const BreedDetails = () => {
    const {breedName} = useParams();
    const [breedImages, setbreedImages] = React.useState([]);

    useEffect(() => {
        let cancelToken = axios.CancelToken;
        let source = cancelToken.source();
        // let mounted = true;
        // if(mounted) {
        (async () => {
            try {
                axios.get(`https://dog.ceo/api/breed/${breedName}/images`, {cancelToken: source.token})
                    .then((res) => {
                        setbreedImages(res.data.message);
                    });
            }catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', error.message);
                } else {
                    // handle error
                    console.log(error);
                }
            }
        })();    
        //}
            
        //return () => mounted = false;
        return () => {
            //when the component unmounts
            //console.log("component unmounted");
            // cancel the request (the message parameter is optional)
            source.cancel('Operation canceled by the user.');
          }
    }, [breedImages, breedName]);

    const images = breedImages.map((image, index) => <BreedDetailCard key={index} dogPicture={image} />);
    

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