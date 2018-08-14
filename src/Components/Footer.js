import React, { Component } from 'react';

import './Components.css';

import linkedIn from '../images/icons/linkedIn.png';
import github from '../images/icons/github.png';


class Header extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="social-links">
            <a href="https://www.linkedin.com/in/collin-vossman-b5a29969/" rel="noopener noreferrer" target="_blank"><img src={ linkedIn } alt="LinkedIn Profile" /></a>
            <a href="https://github.com/cavossman" rel="noopener noreferrer" target="_blank"><img src={ github } alt="GitHub Profile" /></a>
          </div>
          <span>&#169; { new Date().getFullYear() }</span>
        </div>
      </footer>
    );
  }
}

export default Header;
