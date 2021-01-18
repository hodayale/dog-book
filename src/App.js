

import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import HomePage from './components/HomePage';
import { HashRouter, Route } from 'react-router-dom';
import Breeds from './components/Breeds';
import BreedDetails from './components/BreedDetails';

function App() {
  return (
    <HashRouter>
      <Container className="c-app">
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#/">Dog Book</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#/breeds">Breeds</Nav.Link>
            <Nav.Link href="#/about">About</Nav.Link>
          </Nav>
        </Navbar>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/breeds">
          <Breeds/>
        </Route>
        <Route exact path="/breeds/:breedName">
          <BreedDetails/>
        </Route>
      </Container>
    </HashRouter>
  );
}

export default App;
