import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// GLOBAL STYLESHEET
import './App.css';

// PAGE COMPONENTS
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

// PAGE TEMPLATES
import Homepage from './Pages/Homepage/Homepage';
import About from './Pages/About/About';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import Tools from './Pages/Tools/Tools';

// 404 PAGE
import NotFound from './Pages/NotFound/NotFound';

// ROUTING FOR ALL PAGES
class Entry extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={ Homepage } />
              <Route exact path="/about" component={ About } />
              <Route exact path="/projects" component={ Projects } />
              <Route exact path="/contact" component={ Contact } />
              <Route exact path="/tools" component={ Tools } />
              <Route component={ NotFound } />
            </Switch>
          </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default Entry;
