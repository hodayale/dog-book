import { Jumbotron } from "react-bootstrap";
import React from 'react';

const About = () => {
    return (
        <Jumbotron className="bg-white">
            <h1 className="logo-design display-4">Dog Book</h1>
            <p>Man's Best Friend</p>
            <p>This site is a book of all dog breeds.</p>
            <p>Enjoy watching the pictures!</p>
        </Jumbotron>
    )
}

export default About;