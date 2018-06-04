import React, { Component } from 'react';

import InfoCard from '../Components/InfoCard';

import '../Homepage/Homepage.css';

// TODO: Add map for web example of application.
class Projects extends Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="current">
            <span className="section-title">Current Projects</span>
            <InfoCard title="Micro Cloud" description="Content Management System (CMS) for Micro Map applications.  API utilizes Node, Express, Mongo, Mongoose.  Interface utilizes React framework." />
            <InfoCard title="Micro Map" description="Mobile application to help students navigate a new unfamiliar campus.  Currently Android only.  Writen in Android Studio using Java and XML." />
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
