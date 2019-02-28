import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles';
import Index from './pages/IndexPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Tools from './pages/Tools';

function Entry() {
  return (
    <BrowserRouter>
      <Switch>
        <Route name="index" exact path="/" component={ Index } />
        <Route name="about" exact path="/about" component={ About } />
        <Route name="contact" exact path="/contact" component={ Contact } />
        <Route name="tools" exact path="/tools" component={ Tools } />
      </Switch>
    </BrowserRouter>
  );
}

export default Entry;
