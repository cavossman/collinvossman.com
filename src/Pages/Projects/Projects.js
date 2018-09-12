import React, { Component } from 'react';

// COMPONENTS
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

// IMAGES
import mc from '../../images/projects/micro-cloud/interface-buildings.png';
import mm_map from '../../images/projects/micro-map/campus_pins.png';
import mm_building from '../../images/projects/micro-map/building_view.png';
import allaboutjv_homepage from '../../images/projects/allaboutjv.com/homepage.PNG';
import allaboutjv_photos from '../../images/projects/allaboutjv.com/photos.PNG';

import './Projects.css';

// TODO: Add map for web example of application.
// TODO: Pull out information into json object and iterate through it - will help to make this all dynamic.
class Projects extends Component {
  render() {
    return (
      <div className="page">
        <div className="current container">
          <span className="section-title">Current Projects</span><br />
          <span className="disclaimer">*More information and progress screenshots to come.</span>
          <ProjectCard title="allaboutjv.com" featuredImages={[allaboutjv_homepage, allaboutjv_photos]} description="Website for my wife to display some of her photography, writing and music." />
          <ProjectCard title="Micro Cloud" featuredImages={[mc]} description="Content Management System (CMS) for Micro Map applications.  API utilizes Node, Express and MongoDB.  Interface utilizes React framework." />
          <ProjectCard title="Micro Map" featuredImages={[mm_map, mm_building]} description="Mobile application to help students navigate a new unfamiliar campus.  Currently Android only.  Writen in Android Studio using Java and XML." />
        </div>
      </div>
    );
  }
}

export default Projects;
