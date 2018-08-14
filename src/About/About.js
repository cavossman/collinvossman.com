import React, { Component } from 'react';

import InfoCard from '../Components/InfoCard';

// IMAGES
import kstate from '../images/kansas-state.png';
import bd from '../images/bd.png';
import hyvee from '../images/hyvee.svg';
import eagleScout from '../images/eagle-scout.png';

// STYLESHEETS
import '../About/About.css';
import '../Components/Components.css';

// TODO: Create admin section to update the information and cards for this rather than make direct changes to the js file.
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
            <InfoCard image={ bd } employer="Builder Designs" time="December 2017 - Present" title="Web Developer" description="<ul><li>Add features to existing websites.</li><li>Integrate analytic tracking (GTM, FB Pixel, etc)</li><li>Maintain droplets on Digital Ocean</li><li>Maintain Builder Cloud - CMS used by Zillow and hundreds of homebuilders nationwide.</li></ul>" />
            <InfoCard image={ hyvee } employer="HyVee" time="July 2011 - December 2017" title="Frozen Clerk" description="<ul><li>Stock shelves</li><li>Inventory Management</li><li>Assist customers in the store and over the phone</li></ul>"/>
          </div>
          <div className="awards">
            <span className="section-title">Awards</span>
            <InfoCard image={ eagleScout } employer="Eagle Scout" title="Troop 91" time="2013" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
