import axios from 'axios';
import { CardColumns, Container, Form, Col, Button, Navbar, } from 'react-bootstrap';
import DogCard from './DogCard';
//import React, { useEffect } from 'react';
import React from 'react';
import './Breeds.css'
import DogBreed from '../data-models/DogBreed';

class Breeds extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            breedsArr: [],
            filter: ''
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then((breedsRes)=>{
            Object.keys(breedsRes.data.message).forEach((breedName)=>{
                axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`).then((dogRes) => {
                        const dog = new DogBreed(breedName, dogRes.data.message); 
                        this.setState({breedsArr: this.state.breedsArr.concat(dog)});
                });             
            });
        });
    }

    updateImages = () => {
        this.setState({breedsArr: []});
        this.getData();
    }

    render() {
        const dogCards = this.state.breedsArr.map( (dog, index) => {
            return <DogCard key={index} filter={this.state.filter} dogBreed={dog.breed} dogPicture={dog.picture}/>
        });

        return(
            <Container>
                <Navbar className="bg-white justify-content-between">
                    <Form inline>
                    <Form.Label column sm="1">
                            Search
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" onChange={(e) => this.setState({filter: e.target.value})}/>
                        </Col>
                    </Form>
                    <Form inline>
                        <Button onClick={this.updateImages}>Update Images</Button>
                    </Form>
                </Navbar>
                
                <CardColumns>
                    {dogCards}
                </CardColumns>
            </Container>
        );
    }
}

// const Breeds = () => {
//     const [breeds, setbreeds] = React.useState([]);
//     //const [breedsImage, setbreedsImage] = React.useState([]);
//     const [filter, setFilter] = React.useState('');
   
//     useEffect(() => {
//         let mounted = true;
//         if(mounted) {
//             let arr = [];
//             axios.get('https://dog.ceo/api/breeds/list/all')
//             .then((breedsRes)=>{
//                 Object.keys(breedsRes.data.message).forEach((breedName)=>{
//                     axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`).then((dogRes) => {
//                             const dog = new DogBreed(breedName, dogRes.data.message); 
//                             arr.push(dog);
//                     });             
//                 });
//                 //console.log(arr);
//                 setbreeds(arr);
//                 //console.log(breeds);
//             });     
//         }

//         return () => mounted = false;
//     }, [breeds]);

    
//     let dogCards = breeds.map((dog, index) => <DogCard key={index} filter={filter} dogBreed={dog.breed} dogPicture={dog.picture}/>);

//     const updateImages = () => {
//         setbreeds([]);
//     }

//     return(
//         <Container>
//             <Navbar className="bg-white justify-content-between">
//                 <Form inline>
//                 <Form.Label column sm="1">
//                         Search
//                     </Form.Label>
//                     <Col sm="4">
//                         <Form.Control type="text" onChange={(e) => setFilter(e.target.value)}/>
//                     </Col>
//                 </Form>
//                 <Form inline>
//                     <Button onClick={updateImages}>Update Images</Button>
//                 </Form>
//             </Navbar>
            
//             <CardColumns>
//                 {dogCards}
//             </CardColumns>
//         </Container>
//     );
// }

export default Breeds;