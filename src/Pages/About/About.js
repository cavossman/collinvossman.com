import React, { Component } from 'react';

// CUSTOM COMPONENTS
import InfoCard from '../../Components/InfoCard/InfoCard';

// IMAGES
import kstate from '../../images/kansas-state.png';
import bd from '../../images/bd.png';
import hyvee from '../../images/hyvee.svg';
import eagleScout from '../../images/eagle-scout.png';

import './About.css';

// TODO: Create admin section to update the information and cards for this rather than make direct changes to the js file.
let education = [
  {
    'location': 'Kansas State University',
    'time': '2014-2017',
    'title': 'B.S. in Computer Science | Minor in Leadership Studies',
    'image': kstate
  }
];
let experience = [
  {
    'location': 'Builder Designs',
    'time': 'December 2017 - Present',
    'title': 'Web Developer',
    'image': bd,
    'description': '<ul><li>Add features to existing websites.</li><li>Integrate analytic tracking (GTM, FB Pixel, etc)</li><li>Maintain droplets on Digital Ocean</li><li>Maintain Builder Cloud - CMS used by Zillow and hundreds of homebuilders nationwide.</li></ul>'
  },
  {
    'location': 'HyVee',
    'time': 'July 2011 - December 2017',
    'title': 'Frozen Clerk',
    'image': hyvee,
    'description': '<ul><li>Stock shelves</li><li>Inventory Management</li><li>Assist customers in the store and over the phone</li></ul>'
  }
];
let awards = [
  {
    'location': 'Eagle Scout',
    'time': '2013',
    'title': 'Troop 91',
    'image': eagleScout
  }
];

class About extends Component {
  render() {
    return (
      <div className="page about-page">
        <div className="container">
          <div className="education">
            <span className="section-title">Education</span>
            { education.map((edu, index) => {
                return <InfoCard key={ index } image={ edu.image } employer={ edu.location } time={ edu.time } title={ edu.title } />
              })
            }
          </div>
          <div className="experience">
            <span className="section-title">Experience</span>
            { experience.map((exp, index) => {
                return <InfoCard key={ index } image={ exp.image } employer={ exp.location } time={ exp.time } title={ exp.title } description={ exp.description } />
              })
            }
          </div>
          <div className="awards">
            <span className="section-title">Awards</span>
            { awards.map((award, index) => {
                return <InfoCard key={ index } image={ award.image } employer={ award.location } time={ award.time } title={ award.title } />
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default About;
