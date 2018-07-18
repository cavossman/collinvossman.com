import React, { Component } from 'react';
import ReactFancyBox from 'react-fancybox';

import './Components.css';
import 'react-fancybox/lib/fancybox.css';


// Override the styles for the thumbnail image.
// Pull image out into it's own component?
class ProjectCard extends Component {
  render() {
    return (
      <div className="project-card">
        <div className="wrapper">
          <div className="project-container">
            <div className="project-details">
              <span className="headline">{ this.props.title }<hr align="left"/></span>
              <span className="description"> { this.props.description }</span>
            </div>
            <div className="project-image">
              { this.props.featuredImages &&
                this.props.featuredImages.map(photo =>
                  <ReactFancyBox key={photo} className="photo" image={photo} />
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
