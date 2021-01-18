import axios from 'axios';
import { CardColumns } from 'react-bootstrap';
import DogCard from './DogCard';
import React, { useEffect } from 'react';
import DogBreed from '../data-models/DogBreed';
//import React from 'react';

const Breeds = () => {
    const [breeds, setbreeds] = React.useState([]);

    useEffect(() => {
        let mounted = true;
        if(mounted) {
             axios.get('https://dog.ceo/api/breeds/list/all').then((breedsRes)=>{
                    setbreeds(Object.keys(breedsRes.data.message));
                
                
            //     //
            //         // Object.keys(breedsRes.data.message).map((dog) => {                    
            //         //     return new DogBreed(dog, axios.get(`https://dog.ceo/api/breed/${dog}/images/random`).then((res) => { 
            //         //                         return res.data.message;                      
            //         //                         }));
            //     }).then((res) => {
            //         console.log(res.data.message)
            //     });
            });
        }

        return () => mounted = false;
    }, [breeds]);

    const dogCards = breeds.map((dog, index) => <DogCard key={index} dogBreed={dog}/>);

    return(
        <CardColumns>
            {dogCards}
        </CardColumns>
    );
}

export default Breeds;