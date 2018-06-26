// Dependencies
import React, { Component } from 'react';
import axios from 'axios';
// Externals
import Field from './Field';
import './Form.css';


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      submitted: false,
    };
    // To ensure 'this' when calling 'this.updateField' refers to Form and not Field, we do:
    this.updateField = this.updateField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  //Posting to ZAP on every change.  Need to adjust to only submit on button click.
  handleSubmit(event) {
    if (this.validateForm()){
      console.log('submit');
      event.preventDefault();
      axios({
        method: 'post',
        headers : {
          'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        url: 'https://hooks.zapier.com/hooks/catch/3415210/w1evv1/',
        data: this.state
      });
      this.setState({'submitted': true});
    } else {
      console.log('rejected');
      // alert('you made an error in your form boo');
    }
  }

  // Works but refreshes page and deletes all information in form. - revise or come up with a new idea
  validateForm() {
    return this.checkName() && this.checkEmail() && this.checkMessage();
  }
  checkName() {
    console.log('name', this.state.name.length >= 3);
    return this.state.name.length >= 3;
  }
  checkEmail() {
    console.log('email', this.state.email.split('@').length >= 2);
    return this.state.email.split('@').length >= 2;
  }
  checkMessage() {
    console.log('message', this.state.message.length >= 3);
    return this.state.message.length >= 3;
  }

  componentDidMount() {
    // this.setState({'submitted': false});
  }

  render() {
    let message;
    if(this.state.submitted) message = 'Thank you for contacting me, I will be in touch with you soon.';
    else message = 'If you want to get in touch with me, fill out the form below and I will get back to you as soon as I can.';

    return (
      <div className="form">
        <h2 className="hide-xxs">Contact Me</h2>
        <span>{message}</span>
        {this.state.submitted === false &&
          <form onSubmit={this.handleSubmit}>
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
          <input type="submit" value="Submit" className="submit-btn" disabled={ !this.validateForm() } />
        </form>}
      </div>
    );
  }
}

export default Form;
