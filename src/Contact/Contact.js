import React, { Component } from 'react';

import './Contact.css';
import '../Components/Components.css';

class About extends Component {

  emailCollin() {
    console.log('test');
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <form action="#">
            First name:<br />
            <input type="text" name="firstname" /><br />
            Last name:<br />
            <input type="text" name="lastname" /><br />
            Comments:<br />
            <input type="text" name="comments" /><br /><br />
            <input type="submit" value="Submit" onClick={ this.emailCollin() }/>
          </form>
        </div>
      </div>
    );
  }
}

export default About;
