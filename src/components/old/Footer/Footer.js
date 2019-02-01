import React, { Component } from 'react';

// IMAGES
import linkedIn from '../../images/icons/linkedIn.png';
import github from '../../images/icons/github.png';
import resume from '../../images/resume.pdf';


import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/collin-vossman/" rel="noopener noreferrer" target="_blank"><img src={ linkedIn } alt="LinkedIn Profile" /></a>
            <a href="https://github.com/cavossman" rel="noopener noreferrer" target="_blank"><img src={ github } alt="GitHub Profile" /></a>
          </div>
          <span>&#169; { new Date().getFullYear() }</span>
          <div className="submenu">
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/tools">Tools</a>
            <a href="/contact">Contact</a>
            <a href={ resume } target="_blank">Resume</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
