import React from 'react';
import { UniversalLink } from '../cvcore/routing';
import { css } from 'emotion';
import { colors } from '../styles';

const styles = css`
  .Header {
    position: fixed;

    background: linear-gradient(to left, white 50%, transparent 50%);
    background-size: 200% 100%;
    background-position: right bottom;

    top: 0px;
    width: 100%;
    z-index: 10;
    transition: 0.3s ease;
    border-bottom: 1px solid ${colors.color1};
    a {
      color: #000;
      &:hover {
        color: ${colors.color2};
      }
    }
    &.top {
      background-position: left bottom;
      border-bottom: none;
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
        font-size: 0.9rem;
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
    return window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    return window.removeEventListener('scroll', this.handleScroll);
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
              <UniversalLink to="/" className="Header_logo">
                <img src={ (isScrolling) ? '/images/initials.png' : '/images/initials-white.png' } alt="" />
              </UniversalLink>
              <div className="Header_navigation">
                <UniversalLink to="projects" className="btn">Projects</UniversalLink>
                <UniversalLink to="about" className="btn">About</UniversalLink>
                <UniversalLink to="contact" className="btn">Contact</UniversalLink>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
