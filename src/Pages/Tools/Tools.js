import React, { Component } from 'react';

import JSONBeautifier from '../../Components/JSONBeautifier/JSONBeautifier';

import './Tools.css';


class Tools extends Component {
  render() {
    return (
      <div className="page">
        <JSONBeautifier />
      </div>
    );
  }
}

export default Tools;
