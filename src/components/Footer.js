import React from 'react';
import { UniversalLink } from '../cvcore/routing'
import { css } from 'emotion';
import { colors } from '../styles';

const styles = css`
  background-color: ${colors.color1};
  text-align: center;
  color: #fff;
  padding: 20px 0;
  height: auto;
  .footer__inner {
    display: flex;
    flex-direction: column-reverse;
    .footer__social {
      a {
        padding: 0px;
      }
      img {
        height: 50px;
        margin: 5px;
        &:hover {
          animation: 0.2s iconTilt 0s linear;
        }
      }
      span {
        display: block;
      }
    }
    .footer__submenu {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 0 30px 0;
      max-width: 100%;
      a {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        padding: 0px 10px;
        border-radius: 0;
        ${'' /* border-right: 1px solid #fff; */}
        display: inline-block;
        letter-spacing: 0.8px;

        &:last-of-type {
          border: none;
        }
        &:hover {
          color: ${colors.color2};
        }
      }
    }
  }
  @media (min-width: 992px) {
    .footer__inner {
      flex-direction: column;
      .footer__submenu {
        padding: 50px 0 10px 0;
        a {
          padding: 5px 20px;
        }
      }
    }
  }
  @keyframes iconTilt {
    50% {
      transform: rotate(-25deg);
    }
    100% {
      transform: rotate(25deg);
    }
  }

  @media (min-width: 400px) {
    .footer {
      &__inner {
        .footer__submenu {
          flex-direction: row;

          a {
            border-right: 1px solid #fff;
          }
        }
      }
    }
  }
`;

function Footer() {
  return (
    <footer className={styles}>
      <div className="container">
        <div className="footer__inner">
          <div className="footer__social">
            <UniversalLink to="https://www.linkedin.com/in/collin-vossman/" rel="noopener noreferrer" target="_blank">
              <img src="/images/icons/linked-in.png" alt="LinkedIn Profile" />
            </UniversalLink>
            <UniversalLink to="https://github.com/cavossman" rel="noopener noreferrer" target="_blank">
              <img src="/images/icons/github.png" alt="GitHub Profile" />
            </UniversalLink>
            <span>&#169; { new Date().getFullYear() }</span>
          </div>
          <div className="footer__submenu">
            <UniversalLink to="projects" className="btn">Projects</UniversalLink>
            <UniversalLink to="about" className="btn">About</UniversalLink>
            <UniversalLink to="contact" className="btn">Contact</UniversalLink>
            {/* <Link to="tools" className="btn">Tools</Link> */}
            <a href="/images/resume-03-08-2020.pdf" target="_blank" className="btn">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
