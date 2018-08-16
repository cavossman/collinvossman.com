import React, { Component } from 'react';

// IMAGES
import linkedIn from '../../images/icons/linkedIn.png';
import github from '../../images/icons/github.png';

import './Footer.css';

class Header extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/collin-vossman/" rel="noopener noreferrer" target="_blank"><img src={ linkedIn } alt="LinkedIn Profile" /></a>
            <a href="https://github.com/cavossman" rel="noopener noreferrer" target="_blank"><img src={ github } alt="GitHub Profile" /></a>
          </div>
          <span>&#169; { new Date().getFullYear() }</span>
        </div>
      </footer>
    );
  }
}

export default Header;