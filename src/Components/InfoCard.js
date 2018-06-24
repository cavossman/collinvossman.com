import React, { Component } from 'react';
import DOMPurify from 'dompurify';

import './Components.css';

class InfoCard extends Component {
  render() {
    var imageStyles = {
      backgroundImage: 'url(' + this.props.image + ')',
      height: '100px',
    };

    // Remember to purify to ensure no XSS when binding HTML
    return (
      <div className="info-card">
        <div className="info-image" style={ imageStyles }></div>
        <div className="info-details">
          <span className="headline">{ this.props.employer }</span><br />
          <span>{ this.props.title }</span><br />
          <span className="detail">{ this.props.time }</span><br />
          <span className="description" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(this.props.description)}}></span>
        </div>
      </div>
    );
  }
}

export default InfoCard;
