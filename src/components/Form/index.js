// TODO: Remove divs wrapping the form to isolate form.


import React, { Component } from 'react';
import { css } from 'emotion';
import axios from 'axios';

import Field from './Field';

const styles = css`
  background-color: #fff;
  margin: 0 auto;
  padding: 15px;

  @media (max-width: 550px) {
    max-width: 100%;
    width: 100%;
  }

  .form-group label {
    display: inline-block;
    max-width: 100%;
    font-size: 18px !important;
    font-weight: 300 !important;
    display: inline-block;
    max-width: 100%;
    float: left;
  }

  .submit-btn {
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 0.1em solid #000;
    margin-top: 20px;
    box-sizing: border-box;
    text-decoration:none;
    font-family: 'Roboto',sans-serif;
    font-weight: 300;
    color: #000;
    text-align: center;
    transition: all 0.2s;

    &:hover {
      color: #fff;
      background-color: #3c3c3c;
      border-color: #3c3c3c;
      cursor: pointer;
    }
  }

  textarea {
    width: 100%;
    height: 150px;
    padding: 10px 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-color: #f8f8f8;
    resize: none;

    &:hover, &:focus {
      background-color: #fff;
    }
  }

  input[type="text"],
  input[type="email"] {
    width: 100%;
    padding: 10px 15px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    background-color: #f8f8f8;

    &:hover, &:focus {
      background-color: #fff;
    }
  }
`;

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // fields added to state on mount.
    };

    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }
  handleSubmit(event) {
    if (this.validateForm()){
      console.log('submitted successfully');
      event.preventDefault();
      axios({
        method: 'post',
        headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        url: 'https://hooks.zapier.com/hooks/catch/3768568/qwli1q/',
        data: this.state
      });
      this.props.onSubmitCallback();
    } else {
      console.log('submit rejected');
    }
    // Scroll to top of page after submission
    window.scrollTo(0, 0);
  }

  /*  TODO: Check which fields are required and which are filled out
   *  TODO: Peform proper validation on field based on type.
   *
   *  Currently assumes name, email and message are present fields.
   */
  validateForm() {
    return this.checkName() && this.checkEmail() && this.checkMessage();
  }
  checkName() {
    return this.state.name.length >= 3;
  }
  checkEmail() {
    return this.state.email.split('@').length >= 2;
  }
  checkMessage() {
    return this.state.message.length >= 3;
  }
  componentWillMount() {
    let { fields } = this.props;

    fields.forEach((field) => {
      this.setState({[field.key]: ''});
    });
  }

  render() {
    let { fields } = this.props;

    return (
      <form className={styles} onSubmit={this.handleSubmit} >
        {
          fields.map((field) => {
            return (
              <Field
                label={ field.label }
                type={ field.type }
                onChange={ (event) => this.updateField(`${field.key}`, event.target.value) }
                value={ this.state[field.key] }
                key={ field.key }
              />
            );
          })
        }
        <input type="submit" value="Submit" className="submit-btn" disabled={ !this.validateForm() } />
      </form>
    );
  }
}

export default Form;
