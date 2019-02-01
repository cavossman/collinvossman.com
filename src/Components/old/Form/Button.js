// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
  // Info on React PropTypes: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
  static propTypes = {
    email: PropTypes.string.isRequired,
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
  }

  logFormDataToConsole(event) {
    console.log('Form Values', this.props.formValues);
    this.setState({ isClicked: true });
  }

  render() {
    return (
      <button
        disabled={this.state.isClicked}
        onClick={this.logFormDataToConsole}
        className="submit-btn"
      >
        Contact Me
      </button>
    );
  }
}

export default Button;
