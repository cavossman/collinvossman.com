import React from 'react';
import { css } from 'emotion';

const styles = css`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 20;
  background-color: #121212;
  animation: 0.3s background 3.2s forwards;
  .load__outer {
    text-align: center;
    color: #fff;
    .load__inner {
      display: inline-block;
      opacity: 0;
      top: 20vh;
      animation: 3s titleSlide 0s ease-out forwards;

      .load__title {
        font-size: 20px;
        text-transform: uppercase;
        letter-spacing: 3px;
      }

      hr {
        width: 10px;
        height: 2px;
        background-color: #fff;
        margin: 0 auto;
        width: 0;
        animation: 1.5s titleUnderline 1.2s ease-out forwards;
      }
    }
  }
  @keyframes background {
    100% {
      transform: translateX(100vw);
    }
  }
  @keyframes titleSlide {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    25% {
      opacity: 1;
      transform: translateY(40vh);
    }
    95% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(40vh);
    }
  }
  @keyframes titleUnderline {
    100% {
      width: 100%;
    }
  }
`;

class LoadAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationDuration: 3500,
    };
  }

  componentDidMount() {
    setTimeout(this.props.finishedLoading, this.state.animationDuration);
  }

  render() {
    return (
      <div className={styles}>
        <div className="load__outer">
          <div className="load__inner">
            <span className="load__title">Collin Vossman</span>
            <hr/>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadAnimation;
