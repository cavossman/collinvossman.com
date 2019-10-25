import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const defaultStyles = css`
  display: inline-block;
  vertical-align: top;
  max-width: 100%;

  .thumbnail {
    height: 100%;
    background-size: cover;
    background-position: center top;
    cursor: pointer;
  }

  .fancybox-open {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;

    background-color: rgba(0, 0, 0, 0.6);
    display: block;

    img {
      position: absolute;
      margin: auto;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
      max-height: 650px;
      max-width: calc(100% - 30px);
    }
  }

  .title-overlay {
    position: absolute;
    bottom: 0;
    padding: 20px;
    background-color: rgba(255,255,255,0.7);
    left: 0;
    right: 0;
    text-align: left;
  }
  .count {
    background-color: #404040;
    color: #fff;
    width: 80px;
    margin: 0 auto;
    padding: 15px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .unselectable {
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  @media (min-width: 992px) {
    .fancybox-open {
      .fancy-photo {
        max-height: 700px;
        max-width: 1200px;

        img {
          max-width: calc(100% - 30px);
        }
      }
    }
  }
`;

class Fancybox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openImage: false,
      index: this.props.index
    }
    this.openImage = this.openImage.bind(this);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  openImage() {
    this.setState({ 'openImage': true });
  }

  handleClickOutside(event) {
    if (event.target.className === 'fancybox-open') {
      this.setState({ 'openImage': false });
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  getImageCount() {
    return document.getElementsByClassName(this.props.uniqueClass).length;
  }

  /* @prop - height      - Height of thumbnail
   * @prop - width       - Width of thumbnail
   * @prop - image       - Image to display
   * @prop - alt         - Alt text for image
   * @prop - index       - Index in set of array of photos for count
   * @prop - className   - Custom styles for fancybox.
   * @prop - uniqueClass - Unique class name for array of photos - combine with index
   * @prop - title       - Title of photo, overlayed over bottom of the image
   *
   */
  render() {
    const { height, width, image, alt, className, uniqueClass, title } = this.props;
    let { openImage, index } = this.state;
    const customCSS = {
      height: `${height}px`,
      width: `${width}px`
    };
    return (
      <div className={`fancybox ${defaultStyles} ${className} ${uniqueClass}`} style={customCSS} >
        <div className="thumbnail" style={{ backgroundImage: 'url(' + image + ')' }} onClick={this.openImage} ></div>
        {openImage &&
          <div className="fancybox-open">
            {
              !isNaN(index) && uniqueClass && <div className="count unselectable">{index + 1} | {this.getImageCount()}</div>
            }
            <div className="fancy-photo">
              <img src={image} alt={alt} ref={this.setWrapperRef} />
              {
                title && <div class="title-overlay">{title}</div>
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

Fancybox.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  index: PropTypes.number.isRequired,
  title: PropTypes.string,
};

Fancybox.defaultProps = {
  className: undefined,
  height: 300,
  width: 300,
  alt: '',
  title: undefined,
};


export default Fancybox;
