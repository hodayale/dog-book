import axios from 'axios';
import { CardColumns, Container, Form, Col, Button, Navbar, } from 'react-bootstrap';
import DogCard from './DogCard';
import React, { useEffect } from 'react';
//import DogBreed from '../data-models/DogBreed';
import './Breeds.css'
//import React from 'react';

const Breeds = () => {
    const [breeds, setbreeds] = React.useState([]);
    //const [breedsImage, setbreedsImage] = React.useState([]);
    const [filter, setFilter] = React.useState('');

    useEffect(() => {
        let mounted = true;
        if(mounted) {
             axios.get('https://dog.ceo/api/breeds/list/all').then((breedsRes)=>{
                    setbreeds(Object.keys(breedsRes.data.message));
            });
        }

        return () => mounted = false;
    }, [breeds]);

    let dogCards = breeds.map((dog, index) => <DogCard key={index} filter={filter} dogBreed={dog}/>);

    const updateImages = () => {
        dogCards = breeds.map((dog, index) => <DogCard key={index} filter={filter} dogBreed={dog}/>);
    }

    return(
        <Container>
            <Navbar className="bg-white justify-content-between">
                <Form inline>
                <Form.Label column sm="1">
                        Search
                    </Form.Label>
                    <Col sm="4">
                        <Form.Control type="text" onChange={(e) => setFilter(e.target.value)}/>
                    </Col>
                </Form>
                <Form inline>
                    <Button onClick={updateImages}>Update Images</Button>
                </Form>
            </Navbar>
            
            <CardColumns>
                {dogCards}
            </CardColumns>
        </Container>
    );
}

export default Breeds;