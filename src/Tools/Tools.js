import React, { Component } from 'react';

import JSONBeautifier from '../JSONBeautifier/JSONBeautifier';

import './Tools.css';

class Tools extends Component {
  render() {
    return (
      <div className="page">
        Tools page.  Put stuff like handy things im working on in here.
        <JSONBeautifier />
      </div>
    );
  }
}

export default Tools;
