import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { sanitizeHTML } from '../../cvcore';

const styles = css`
  background-color: #fff;
  padding: 20px;
  margin: 0 auto 15px;
  width: 1000px;
  max-width: calc(100% - 30px);

  .ec {
    &__inner {
      display: flex;
      flex-direction: column;

      &-left {
        .ec__image {
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
        }
      }

      &-right {
        .ec__details { margin: 1.5rem 0; } 

        .ec__location, .ec__title, .ec__dates {
          display: block;
          text-align: center;
        }

        .ec__title {
          text-transform: uppercase;
          font-weight: bold;
        }
        .ec__dates {
          font-style: italic;
        }
        .ec__description {
          ul {
            padding-left: 20px;            
          }
        }
      }
    }
  }

  @media (min-width: 992px) {
    padding: 30px;
    margin: 0 auto 30px;

    .ec {
      &__inner {
        flex-direction: row;

        &-left {
          min-width: 150px;
          margin-right: 30px;
        }

        &-right {
          .ec__details { margin: 0; }

          .ec__location, .ec__title, .ec__dates {
            text-align: left;
          }

          .ec__title {
            font-size: 1.2rem;
            letter-spacing: 0.6px;
          }

          .ec__description {
            ul {
              padding-left: 40px;
            }
          }
        }
      }
    }
  }
`;

class EmploymentCard extends React.Component {
  render() {
    let imageStyles = {
      backgroundImage: 'url(' + this.props.image + ')',
      height: '100px',
    };
    let { title, location, description, startDate, endDate } = this.props;
    return (
      <div className={styles}>
        <div className="ec">
          <div className="ec__inner">
            <div className="ec__inner-left">
              <div className="ec__image" style={ imageStyles }></div>
            </div>
            <div className="ec__inner-right">
              <div className="ec__details">
                <span className="ec__title">{ title }</span>
                <span className="ec__location">{ location }</span>
                <span className="ec__dates">{ startDate ? startDate + ' - ' : '' } { endDate }</span>
              </div>
              {
                description.list &&
                <ul className="ec__description">
                  {
                    description.list.map(item => {
                      return (
                        <li>{item}</li>
                      )
                    })
                  }
                </ul>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

EmploymentCard.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  description: PropTypes.object,
  image: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string
};

EmploymentCard.defaultProps = {
  title: '',
  location: '',
  description: {},
  image: '',
  startDate: '',
  endDate: 'Present'
};

export default EmploymentCard;
