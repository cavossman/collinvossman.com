import React, { Component } from 'react';

import ProjectCard from '../Components/ProjectCard';

// import '../Homepage/Homepage.css';
import './Projects.css';

// TODO: Add map for web example of application.
class Projects extends Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="current">
            <span className="section-title">Current Projects</span> <br />
            <span className="disclaimer">*More information and progress screenshots to come.</span>
            <ProjectCard title="Micro Cloud" description="Content Management System (CMS) for Micro Map applications.  API utilizes Node, Express, Mongo, Mongoose.  Interface utilizes React framework." />
            <ProjectCard title="Micro Map" description="Mobile application to help students navigate a new unfamiliar campus.  Currently Android only.  Writen in Android Studio using Java and XML." />
          </div>
          <div className="upcoming">
            <span className="section-title">Upcoming Projects</span>
            <ProjectCard title="OSRS Grand Exchange Interface" description="Interface to display information from api for Old School RuneScape." />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
