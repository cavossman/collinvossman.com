import React, { Component } from 'react';

import InfoCard from '../Components/InfoCard';

import kstate from '../images/kansas-state.png';
import bd from '../images/bd.png';

import '../About/About.css';
import '../Components/Components.css';

// TODO: Create Skills page to display information on languages and such. NodeJS, JS (Frameworks: Angular and React), Mongo, Mongoose, 
class About extends Component {
  render() {
    return (
      <div className="page">
        <div className="container">
          <div className="education">
            <span className="section-title">Education</span>
            <InfoCard image={ kstate } alt="Kansas State" title="Kansas State University" time="2014-2017" description="majored in Computer Science with minor in Leadership Studies" />
          </div>
          <div className="experience">
            <span className="section-title">Experience</span>
            <InfoCard image={ bd } alt="Builder Designs" title="Builder Designs" time="December 2017 - Present" description="Web Developer" />
            <InfoCard image={ bd } alt="HyVee" title="HyVee" time="July 2011 - December 2017" description="Frozen Clerk" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
