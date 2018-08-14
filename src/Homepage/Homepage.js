import React, { Component } from 'react';
import ToolTable from '../Components/ToolTable/ToolTable';

import './Homepage.css';
import '../App.css';

import collin from '../images/cv.jpg';


// Frontend
import angular from '../images/tools/angular.png';
import react from '../images/tools/react.png';
import html from '../images/tools/html5.png';
import css from '../images/tools/css3.png';
import less from '../images/tools/less.png';

// Backend
import mongodb from '../images/tools/mongodb.png';
import node from '../images/tools/nodejs.png';
import mysql from '../images/tools/mysql.png';

// Utilities
import git from '../images/tools/git.png';
import atom from '../images/tools/atom.png';

// OS
import windows from '../images/tools/windows.png';
import macos from '../images/tools/macos.png';
import ubuntu from '../images/tools/ubuntu.svg';

let tool_list = [
  {
    'category': 'Frontend',
    'images': [
      angular,
      react,
      html,
      css,
      less
    ]
  },
  {
    'category': 'Backend',
    'images': [
      node,
      mongodb,
      mysql
    ]
  },
  {
    'category': 'Utilities',
    'images': [
      git,
      atom
    ]
  },
  {
    'category': 'OS',
    'images': [
      windows,
      macos,
      ubuntu
    ]
  }
];

/**
  * This utility function allows function calls to be debounced.
  * @param {Function} func Function that requires debouncing
  * @param {Number} wait Wait time in milliseconds between successive invocations
  */
const debounce = (func, wait) => {
  let timeout
  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func.apply(this, args), wait)
  }
}

class Homepage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0,
    }
  }

  componentDidMount() {
    return window.addEventListener('scroll', debounce(this.handleScroll, 1))
  }

  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 1))
  }

  handleScroll = () => {
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
  }


  scrollPage() {
    document.getElementById('section').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  render() {
    const isScrolling = !!this.state.scrollPositionY
    return (
      <div className="homepage">
        <div className="image-background">
          <div className="hero-image tinted"></div>
          <div className="hero-overlay name">
            <h1 className="text-border">COLLIN VOSSMAN</h1>
            <span className="text-border">Web Developer | Eagle Scout | Wildcat</span>
          </div>
          <div className="hero-overlay">
            <div className={(isScrolling) ? 'read-more hidden' : 'read-more bounce'} onClick={ this.scrollPage }>
              Read More
              <div className="arrow-down"></div>
            </div>
          </div>
        </div>
        <div className="section" id="section">
          <img src={ collin } alt="Collin Vossman" className="cv-image" />
          <div className="overview-container">
            <p>
              Welcome to my website. I am a recent graduate of Kansas State University where I majored in Computer Science and minored in
              Leadership Studies.  I currently work at Builder Designs where I maintain and add features to existing websites. I work with
              the marketing and SEO teams to manage CRM integrations, structured data and analytics. I have a strong interest in working
              with APIs and enjoy both front end and back end development.  In my free time I enjoy spending time with my wife and our puppy.
            </p>
          </div>
        </div>
        <div className="section container" style={{'padding-top':'0'}}>
          <h1 style={{'textAlign': 'left'}}>Toolbelt</h1>
          <div style={{'textAlign': 'left', 'margin': '-15px 0 15px 0'}}>Everyone needs tools to get the job done, these are some of mine.</div>
          <ToolTable tools={tool_list} />
        </div>
      </div>
    );
  }
}

export default Homepage;
