import React from 'react';
import { css } from 'emotion';
import Form from '../../components/Form';
import { colors } from '../../styles';

const styles = css`
  padding: 150px 0 200px 0;

  .form__outer {
    display: flex;
    justify-content: center;

    .form__inner {
      display: inline-flex;
      border-radius: 3px;
      overflow: hidden;
      min-height: 485px;

      .form__left {
        background-color: ${colors.color2};
        width: 100%;
        max-width: 400px;
        padding: 30px;
        color: #fff;
        margin-right: -360px;
        z-index: 1;

        span {
          display: block;
          text-align: center;
        }

        p {
          padding: 15px 0 0 0;
        }
      }

      .form__right {
        width: 100%;
        max-width: 400px;
      }
    }
  }
  @media (min-width: 777px) {
    .form {
      &__left {
        animation: 0.2s slide 0.8s ease-out forwards;

        p {
          opacity: 0;
          animation: 0.7s fade 1.0s ease-out forwards;
        }
      }
    }
  }
  @media (max-width: 776px) {
    .form__outer {

      .form__inner {
        width: 100%;
        flex-direction: column;

        .form__left, .form__right {
          max-width: unset;
        }
      }
    }
  }
  @keyframes slide {
    100% {
      margin-right: 0;
    }
  }
  @keyframes fade {
    100% {
      opacity: 1;
    }
  }
`;

const formConfig = {
  heading: 'TALK TO ME',
  submitMessage: {
    pre: 'If you want to get in touch with me, fill out the form and I will get back to you as soon as I can.',
    post: 'Thank you for contacting me, I will be in touch with you soon.',
  },
  fields: [
    {
      'key': 'name',
      'label': 'Name',
      'type': 'text',
    },
    {
      'key': 'email',
      'label': 'Email',
      'type': 'email',
    },
    {
      'key': 'message',
      'label': 'Message',
      'type': 'textarea',
    },
  ]
}

class FormSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
    this.onSubmitCallback = this.onSubmitCallback.bind(this);
  }

  onSubmitCallback() {
    this.setState({ submitted: true });
  }

  render() {
    let { submitted } = this.state;
    return (
      <div className={styles}>
        <div className="container">
          <div className="form__outer">
            <div className="form__inner">
              <div className="form__left">
                <span>{ formConfig.heading }</span>
                <p>{ !submitted ? formConfig.submitMessage.pre : formConfig.submitMessage.post }</p>
              </div>
              { !submitted &&
                <div className="form__right">
                    <Form
                      fields={ formConfig.fields }
                      onSubmitCallback={ this.onSubmitCallback }
                    />
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormSection;
