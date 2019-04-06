import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ScrollToTop } from './cvcore';
import './styles';
import Index from './pages/IndexPage';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Tools from './pages/Tools';
import NotFound from './pages/NotFound';

function Entry() {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route name="index" exact path="/" component={ Index } />
          <Route name="about" exact path="/about" component={ About } />
          <Route name="projects" exact path="/projects" component={ Projects } />
          <Route name="contact" exact path="/contact" component={ Contact } />
          <Route name="tools" exact path="/tools" component={ Tools } />
          <Route name="tools" exact path="/tools" component={ Tools } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default Entry;
