import React, { Component } from 'react';

// CUSTOM COMPONENTS
import ToolTable from '../../Components/ToolTable/ToolTable';

// IMAGES
import collin from '../../images/cv.jpg';

import './Homepage.css';


// Frontend
import angular from '../../images/tools/angular.png';
import react from '../../images/tools/react.png';
import html from '../../images/tools/html5.png';
import css from '../../images/tools/css3.png';
import less from '../../images/tools/less.png';

// Backend
import mongodb from '../../images/tools/mongodb.png';
import node from '../../images/tools/nodejs.png';
import mysql from '../../images/tools/mysql.png';

// Utilities
import git from '../../images/tools/git.png';
import atom from '../../images/tools/atom.png';

// OS
import windows from '../../images/tools/windows.png';
import macos from '../../images/tools/macos.png';
import ubuntu from '../../images/tools/ubuntu.svg';

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
      scrollPositionY: 0
    }
  }

  // Create 'scroll' event
  componentDidMount() {
    return window.addEventListener('scroll', debounce(this.handleScroll, 1))
  }

  // Remove 'scroll' event when leaving the page
  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 1))
  }

  // Sets the 'scrollPositionY' based upon the distance down the page
  handleScroll = () => {
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
  }

  // Scrolls below the fold of the page on 'Read More' click
  scrollPage() {
    document.getElementById('bio').scrollIntoView({
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
        <section id="bio">
          <img src={ collin } alt="Collin Vossman" className="cv-image" />
          <div className="overview-container">
            <p>
              Welcome to my website. I am a recent graduate of Kansas State University where I majored in Computer Science and minored in
              Leadership Studies.  I currently work at Builder Designs where I maintain and add features to existing websites. I work with
              the marketing and SEO teams to manage CRM integrations, structured data and analytics. I have a strong interest in working
              with APIs and enjoy both front end and back end development.  In my free time I enjoy spending time with my wife and our puppy.
            </p>
          </div>
        </section>
        <section className="container toolbelt">
          <h1>Toolbelt</h1>
          <div className="toolbelt-description">Everyone needs tools to get the job done, these are some of mine.</div>
          <ToolTable tools={ tool_list } />
        </section>
      </div>
    );
  }
}

export default Homepage;
