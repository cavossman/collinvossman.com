import React from 'react';
import { css } from 'emotion';
import { smoothScrollById } from '../../components/Utilities';

const styles = css`
  text-align: center;
  background-color: #000;
  .HeroImage {
    height: 100vh;
    width: 100%;
    position: relative;
    background-image: url('/images/homepage-bg.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.6;
  }
  .HeroImage_title {
    position: absolute;
    bottom: 50%;
    width: 100%;
    color: #fff;
    h1 {
      letter-spacing: 2.3px;
      font-size: 40px;
      margin-bottom: 5px;
    }
    span {
      letter-spacing: 1.5px;
    }
  }
  .HeroImage_overlay {
    position: absolute;
    bottom: 15px;
    width: 100%;
    color: #fff;
  }
  .HeroImage_scroll {
    display: inline-block;
    margin: 0 auto;
    letter-spacing: 2px;
    &:hover {
      position: relative;
      margin: 0 auto;
      cursor: pointer;
      @media(min-width: 992px) {
        animation: bounce 1s infinite;
        animation-fill-mode: both;
        animation-timing-function: linear;
      }
    }
  }
  .HeroImage_arrow {
    border: solid #fff;
    border-width: 0 4px 4px 0;
    display: block;
    padding: 3px;
    height: 10px;
    width: 10px;
    margin: 0 auto;
    transform: rotate(45deg);
  }
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;

function HeroImage() {
  return (
    <div className={styles}>
      <div className="HeroImage"></div>
      <div className="HeroImage_title">
        {/* <h1>COLLIN VOSSMAN</h1>
        <span>Web Developer | Eagle Scout | Wildcat</span> */}
      </div>
      <div className="HeroImage_overlay">
        <div className="HeroImage_scroll" onClick={() => smoothScrollById('bio') }>
          READ MORE
          <div className="HeroImage_arrow"></div>
        </div>
      </div>
    </div>
  );
}
export default HeroImage;
