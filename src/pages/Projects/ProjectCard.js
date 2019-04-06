import React from 'react';
import { css } from 'emotion';
import { Fancybox } from '../../cvui';
import { colors } from '../../styles';

const styles = css`
  width: calc(100% - 30px);
  padding: 15px 30px 30px;
  max-width: 1000px;
  background-color: #fff;
  margin: 15px auto;
  text-align: left;

  .pc {
    &__inner {
      &-details {
        display:inline-block;
        width: 100%;
        vertical-align: top;

        hr {
          width: 120px;
          border-top: 4px solid ${colors.color2};
          margin-top: 0px;
        }

        .headline {
          width: 70%;
          font: normal 16px/1.5 "Source Sans Pro",sans-serif;
          font-size: 35px;
          font-weight: 300;
          line-height: 55px;
          color: #3b3b3b;
          width: 100%;
          display: inline-block;
        }
      }

      &-image {
        width: 100%;
        min-width: 500px;
        display: block;
        margin: 0 auto;
        padding-top: 15px;
        text-align: center;
      }
    }
  }

  @media (max-width: 600px) {
    .project-image {
      width: 100%;
      min-width: 1px;
    }
  }
  @media (max-width: 450px) {
    .headline {
      font-size: 20px;
      font-weight: bold;
    }
  }

`;

const customFancyboxStyles = css`
  .fancybox {
    &:last-of-type {
      margin-right: 0;
    }
  }
  .thumbnail {
    margin: 0 10px;
    border: 1px solid ${colors.color3};
  }
`;

const slugify = (str) => {
  return str.replace(' ', '-');
}

class ProjectCard extends React.Component {
  render() {
    let { title, description, featuredImages } = this.props;
    return (
      <div className={styles}>
        <div className="pc">
          <div className="pc__inner">
            <div className="pc__inner-details">
              <span className="headline">{ title }<hr align="left"/></span>
              <span className="description"> { description }</span>
            </div>
            <div className="pc__inner-image">
              { featuredImages &&
                featuredImages.map((photo, index) =>
                  <Fancybox
                    className={customFancyboxStyles}
                    uniqueClass={`${slugify(title)}-photos`}
                    index={index}
                    image={photo}
                    key={index}
                  />
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
