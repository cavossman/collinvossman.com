import React, { Component } from 'react';

import './Components.css';

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

class Header extends Component {
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

  render() {
    const isScrolling = !!this.state.scrollPositionY
    return (
      <header className={(isScrolling) ? 'header header-normal' : 'header header-top'}>
        <div className="container nav">
          <a href="/" className="home-link">Collin Vossman</a>
          <a href="/about" className="btn">About</a>
          <a href="/projects" className="btn">Projects</a>
        </div>
      </header>
    );
  }
}

export default Header;
