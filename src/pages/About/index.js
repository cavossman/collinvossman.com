import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Col1 from '../../templates/Col1';
import EmploymentSection from './EmploymentSection';
import EducationSection from './EducationSection';
import AwardsSection from './AwardsSection';

const employment = [
  {
    title: 'Web Developer',
    location: 'Go Local Interactive',
    description: {
      list: [
        'Build custom WordPress themes.',
        'Manage build automation with gulp and webpack',
        'Develop self storage rental and payment portal application build with vue.js',
        'Maintain Laravel API and custom dashboard projects'
      ]
    },
    image: '/images/about/gli-logo.jpg',
    startDate: 'May 2019',
    endDate: 'Present',
  },
  {
    title: 'Frontend Developer',
    location: 'Intouch Solutions',
    description: {
      list: [
        'Contract position through TEKsystems.',
        'Develop sales aides utilizing Vue.js - matching creative designed in Sketch and apply client feedback in batches.',
        'Implement tracking to be monitored in Salesforce.',
        'Modify webpack and build process - deploy build to Veeva/Salesforce'
      ]
    },
    image: '/images/about/intouch.jpg',
    startDate: 'December 2018',
    endDate: 'March 2019',
  },
  {
		title: 'Full Stack Developer',
    location: 'Builder Designs',
    description: { 
      list: [
        'Develop new websites in React and Angular. Recreating pixel perfect design based on creative files in Sketch.',
        'Maintain new construction data feeds written in PHP and JavaScript - importing MLS data and exporting XML feeds to Zillow and BDX.',
        'Maintain existing apache and nginx server configurations.',
        'Automate certain tasks server side with shell scripts.',
        'Collaborate with marketing to implement tracking and analytics.',
        'Contributed to the development of CMS - Builder Cloud - utilized by Zillow'
      ]
    },
		image: '/images/about/bd.png',
		startDate: 'December 2017',
    endDate: 'December 2018',
	}
];

const education = [
  {
    title: 'B.S in Computer Science | Minor in Leadership Studies',
    location: 'Kansas State University',
    image: '/images/about/kansas-state.png',
    startDate: '2014',
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
