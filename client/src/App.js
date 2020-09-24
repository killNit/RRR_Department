import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import { Container, } from 'react-bootstrap';
import NavBar from './components/NavBar';
import ItemView from './components/ItemView';
import Sections from './components/Sections';
import SectionForm from "./components/SectionForm";

const App = () => (
<>
  <NavBar />
  <Container>
    <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/api/sections' component={Sections} />
        <Route exact path="/sections/new" component={SectionForm} />
        <Route exact path='/about' component={About} />
        <Route component={NoMatch} />
    </Switch>
  </Container>
</>
);

export default App;
