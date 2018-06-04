import React, { Component } from 'react';

import './Components.css';

class InfoCard extends Component {
  // implement state for click

  render() {
    return (
      <div className="info-card">
        <img src={ this.props.image } alt={ this.props.alt } />
        <span>{ this.props.title }</span><br />
        <span>{ this.props.time }</span><br />
        <span>{ this.props.description }</span>
      </div>
    );
  }
}

export default InfoCard;
