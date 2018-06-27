import React, { Component } from 'react';

import './Components.css';

class ProjectCard extends Component {
  render() {
    // var imageStyles = {
    //   backgroundImage: 'url(' + this.props.image + ')',
    //   height: '100px',
    // };

    return (
      <div className="project-card">
        <div className="project-container">
          <div className="project-details">
            <span className="headline">{ this.props.title }<hr /></span>
            <span className="description"> { this.props.description }</span>
          </div>
          <div className="project-image">
            { this.props.featuredImage && <img src={this.props.featuredImage} alt="" /> }
            { this.props.secondaryImage && <img src={this.props.secondaryImage} alt="" /> }
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
