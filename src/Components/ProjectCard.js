import React, { Component } from 'react';

import './Components.css';

class InfoCard extends Component {
  render() {
    // var imageStyles = {
    //   backgroundImage: 'url(' + this.props.image + ')',
    //   height: '100px',
    // };

    return (
      <div className="project-card">
        <div className="project-details">
          <span className="headline">{ this.props.title }</span><br />
          <span className="detail">{ this.props.time }</span><br />
          <span className="description"> { this.props.description }</span>
        </div>
      </div>
    );
  }
}

export default InfoCard;
