import React, { Component } from 'react';

import JSONVisualizer from '../../Components/JSONVisualizer/JSONVisualizer';

import './Tools.css';


class Tools extends Component {
  render() {
    return (
      <div className="page">
        <JSONVisualizer />
      </div>
    );
  }
}

export default Tools;
