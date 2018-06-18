// Dependencies
import React, { Component } from 'react';
import axios from 'axios';
// Externals
import Field from './Field';
import Button from './Button';
import './Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  //Posting to ZAP on every change.  Need to adjust to only submit on button click.
  submitForm() {
    axios({
      method: 'post',
      headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      },
      url: 'https://hooks.zapier.com/hooks/catch/3415210/avnnqb/',
      data: this.state
    });
  }

  render() {
    return (
      <form className="form">
        {/* Name field */}
        <Field
          label="Name"
          onChange={(event) => this.updateField('name', event.target.value)}
          value={this.state.name}
        />
        {/* Email field */}
        <Field
          label="Email"
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
        />
        {/* Message textarea */}
        <Field
          label="Message"
          onChange={(event) => this.updateField('message', event.target.value)}
          /* This should be written like 'textarea' */
          textarea={true}
          value={this.state.message}
        />
        {/* Submit button */}
        <Button
          email="cavossman@gmail.com"
          formValues={this.state}
          onClick={this.submitForm()}
        />
      </form>
    );
  }
}

export default Form;
