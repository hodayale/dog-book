

import './App.css';
import { Container} from 'react-bootstrap';
import HomePage from './components/HomePage';
import { HashRouter, Route } from 'react-router-dom';
import Breeds from './components/Breeds';
import BreedDetails from './components/BreedDetails';
import Menu from './components/Menu';
import About from './components/About';

function App() {
  return (
    <HashRouter>
      <Container className="c-app">
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/breeds">
          <Menu />
          <Breeds/>
        </Route>
        <Route exact path="/breeds/:breedName">
          <Menu />
          <BreedDetails/>
        </Route>
        <Route exact path="/About">
          <Menu />
          <About/>
        </Route>
      </Container>
    </HashRouter>
  );
}

export default App;
