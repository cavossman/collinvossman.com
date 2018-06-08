import React, { Component } from 'react';

import './Contact.css';
import '../Components/Components.css';

import Form from '../Components/Form/Form';

class Contact extends Component {

  render() {
    return (
      <div className="page">
        <div className="container">
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;
