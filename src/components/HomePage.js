import React from "react";
import { Redirect } from "react-router-dom";

const { Jumbotron, Button } = require("react-bootstrap");

const HomePage = () => {
    const [redirect, setRedirect] = React.useState(false);

    const navigateToBreed = () => {
        setRedirect(true);
    }

    if(redirect) {
        return (<Redirect push to={`/breeds`}/>)
    }

    return(
        <Jumbotron>
            <h1>Dog Book</h1>
            <p>Man's Best Friend</p>
            <p>
                <Button onClick={navigateToBreed}>Woof!</Button>
            </p>
        </Jumbotron>
    );
}

export default HomePage;