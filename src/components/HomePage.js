const { Jumbotron, Button } = require("react-bootstrap");

const HomePage = () => {
    return(
        <Jumbotron>
            <h1>Dog Book</h1>
            <p>Man's Best Friend</p>
            <p>
                <Button>Woof!</Button>
            </p>
        </Jumbotron>
    );
}

export default HomePage;