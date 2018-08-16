import React, { Component } from 'react';

// CUSTOM COMPONENTS
import Form from '../../Components/Form/Form';

import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="page contact-page">
        <div className="container">
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;
