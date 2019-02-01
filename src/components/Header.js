import React from 'react';
import { Link } from 'react-router-dom';
import { css } from 'emotion';
import { debounce } from './Utilities';

const styles = css`
  .Header {
    position: fixed;

    background: linear-gradient(to left, white 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;

    top: 0px;
    width: 100%;
    z-index: 100;
    transition: 0.3s ease;
    a {
      color: #000;
    }
    &.top {
      background-position: left bottom;
      a {
        color: #fff;
      }
    }
  }
  .Header_inner {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  .Header_logo {
    float: left;
    img {
      height: 50px;
    }
  }
  .Header_navigation {
    a {
      letter-spacing: 2.3px;
      text-transform: uppercase;
      line-height: 2;
    }
    @media (max-width: 412px) {
      a {
        letter-spacing: 1px;
        padding: 8px 3px;
      }
    }
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPositionY: 0,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    return window.addEventListener('scroll', debounce(this.handleScroll, 1));
  }

  componentWillUnmount() {
    return window.removeEventListener('scroll', debounce(this.handleScroll, 1));
  }

  handleScroll = () => {
    const scrollPositionY = +window.scrollY;
    return this.setState({ scrollPositionY });
  }

  render() {
    const isScrolling = !!this.state.scrollPositionY;
    return (
      <div className={styles}>
        <header className={`Header ${(isScrolling) ? '' : 'top'}`}>
          <div className="container">
            <div className="Header_inner">
              <Link to="/" className="Header_logo">
                <img src={(isScrolling) ? '/images/initials.png' : '/images/initials-white.png'} alt="" />
              </Link>
              <div className="Header_navigation">
                <Link to="projects" className="btn">Projects</Link>
                <Link to="about" className="btn">About</Link>
                <Link to="contact" className="btn">Contact</Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
