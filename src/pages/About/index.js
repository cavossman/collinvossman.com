import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Col1 from '../../templates/Col1';
import EmploymentSection from './EmploymentSection';
import EducationSection from './EducationSection';
import AwardsSection from './AwardsSection';

const employment = [
  {
    title: 'Frontend Developer',
    location: 'Intouch Solutions',
    description: '<ul><li>Contract position through TEKsystems.</li><li>Develop sales aides utilizing Vue.js - matching creative designed in Sketch and apply client feedback in batches.</li><li>Implement tracking to be monitored in Salesforce.</li><li>Modify webpack and build process - deploy build to Veeva/Salesforce</li><li>Utilize TFS/Git for version control.</li></ul>',
    image: '/images/about/intouch.jpg',
    startDate: 'December 2018 -',
    endDate: 'March 2019',
  },
  {
		title: 'Full Stack Developer',
		location: 'Builder Designs',
		description: '<ul><li>Develop new websites in React and Angular. Recreating pixel perfect design based on creative files in Sketch.</li><li>Maintain new construction data feeds written in PHP and JavaScript - importing MLS data and exporting XML feeds to Zillow and BDX.</li><li>Maintain existing apache and nginx server configurations.</li><li>Automate certain tasks server side with shell scripts.</li><li>Write and maintain node microservices.</li><li>Utilize Git for version control.</li><li>Collaborate with marketing to implement tracking and analytics such as GTM and Facebook Pixel.</li><li>Contributed to the development of Content Management System - Builder Cloud - utilized by Zillow and hundreds of homebuilders across the United States.</li></ul>',
		image: '/images/about/bd.png',
		startDate: 'December 2017 -',
    endDate: 'December 2018',
	},
  {
		title: 'Frozen Clerk',
		location: 'HyVee',
		description: '<ul><li>Stock shelves.</li><li>Inventory management</li><li>Assist customers in the store and over the phone.</li></ul>',
		image: '/images/about/hyvee.svg',
		startDate: 'July 2011 -',
    endDate: 'December 2017',
	},
];

const education = [
  {
    title: 'B.S in Computer Science | Minor in Leadership Studies',
    location: 'Kansas State University',
    image: '/images/about/kansas-state.png',
    startDate: '2014 -',
    endDate: '2017',
  }
];

const awards = [
  {
    title: 'Eagle Scout',
    location: 'Troop 91',
    image: '/images/about/eagle-scout.png',
    endDate: '2013',
  }
]

function About() {
  return (
    <PageWrapper>
      <Col1>
  			<EmploymentSection employment={ employment } />
        <EducationSection education={ education } />
        <AwardsSection awards={ awards } />
      </Col1>
    </PageWrapper>
  );
}
export default About;
