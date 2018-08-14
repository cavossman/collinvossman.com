import React, { Component } from 'react';

import './Contact.css';
import '../Components/Components.css';

import Form from '../Components/Form/Form';

class Contact extends Component {

  render() {
    // inline style page height to help while wrapping up more important things
    return (
      <div className="page" style={{"minHeight": "680px"}}>
        <div className="container">
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;
