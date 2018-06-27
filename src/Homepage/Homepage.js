import React, { Component } from 'react';

import './Homepage.css';
import '../App.css';

import collin from '../images/cv.jpg';


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
            <h1>COLLIN VOSSMAN</h1>
            <p>
              Welcome to my website. I am a recent graduate of Kansas State University where I majored in Computer Science and minored in
              Leadership Studies.  I currently work at Builder Designs where I maintain and add features to existing websites. I work with
              the marketing and SEO teams to manage CRM integrations, structured data and analytics. I have a strong interest in working
              with APIs and enjoy both front end and back end development.  In my free time I enjoy spending time with my wife and our puppy.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
