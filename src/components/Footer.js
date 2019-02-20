import React from 'react';
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
      padding: 0 0 30px 0;
      max-width: 100%;
      a {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        padding: 5px 20px;
        border-right: 1px solid #fff;
        display: inline-block;
        &:last-child {
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
`;

function Footer() {
  return (
    <footer className={styles}>
      <div className="container">
        <div className="footer__inner">
          <div className="footer__social">
            <a href="https://www.linkedin.com/in/collin-vossman/" rel="noopener noreferrer" target="_blank">
              <img src="/images/icons/linkedin.png" alt="LinkedIn Profile" />
            </a>
            <a href="https://github.com/cavossman" rel="noopener noreferrer" target="_blank">
              <img src="/images/icons/github.png" alt="GitHub Profile" />
            </a>
            <span>&#169; { new Date().getFullYear() }</span>
          </div>
          <div className="footer__submenu">
            <a href="/projects">Projects</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/images/resume.pdf" target="_blank">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
