import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Col1 from '../../templates/Col1';
import EmploymentSection from './EmploymentSection';
import EducationSection from './EducationSection';
import AwardsSection from './AwardsSection';

const employment = [
  {
    title: 'Co-Founder & CTO',
    location: 'CodeVoss',
    description: {
      list: []
    },
    image: '/images/about/codevoss.jpg',
    startDate: 'July 2024',
    endDate: 'Present',
  },
  {
    title: 'Software Engineer',
    location: 'Tickets for Less',
    description: {
      list: [
        'Develop CI/CD pipelines to automate code delivery.',
        'Reduce technical debt by consolidating divergent codebases and migrating servers from existing vendors to AWS.',
        'Extend custom PHP framework to provide web services for ticket brokers'
      ]
    },
    image: '/images/about/tfl.png',
    startDate: 'November 2023',
    endDate: 'Present',
  },
  {
    title: 'Lead Software Engineer',
    location: 'Go Local Interactive',
    description: {
      list: [
        'Design and develop Laravel based APIs integrate client POS software with website',
        'Architect internal reporting solution that retrieves data from various 3rd parties to produce reports with Apache Superset',
        'Developed an admin dashboard for multifamily industry to manage and supplement data from their POS.',
        'Develop payment portal and online rental applications for the self storage industry',
        'Implement linting, unit testing, automated deployments',
        'Create custom/reusable WordPress themes and plugins',
        'Lead software team and mentor teammates in the form of 1:1 and code reviews'
      ]
    },
    image: '/images/about/gli-logo.jpg',
    startDate: 'May 2019',
    endDate: 'November 2023',
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
