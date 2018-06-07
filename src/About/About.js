import React, { Component } from 'react';

import InfoCard from '../Components/InfoCard';

import kstate from '../images/kansas-state.png';
import bd from '../images/bd.png';
import hyvee from '../images/hyvee.svg';

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
            <InfoCard image={ kstate } employer="Kansas State University" time="2014-2017" title="B.S. in Computer Science | Minor in Leadership Studies" />
          </div>
          <div className="experience">
            <span className="section-title">Experience</span>
            <InfoCard image={ bd } employer="Builder Designs" time="December 2017 - Present" title="Web Developer" description="Maintained existing websites and servers." />
            <InfoCard image={ hyvee } employer="HyVee" time="July 2011 - December 2017" title="Frozen Clerk" description="Stock shelves"/>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
