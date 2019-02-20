import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import EmploymentSection from './EmploymentSection';
import EducationSection from './EducationSection';

const employment = [
  {
		title: 'Full Stack Developer',
		location: 'Builder Designs',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
		image: 'https://placeimg.com/802/802/tech',
		startDate: '12/17/2017',
    endDate: '12/17/2018',
	},
  {
		title: 'Frontend Developer',
		location: 'Intouch Solutions',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
		image: 'https://placeimg.com/803/803/tech',
    startDate: '12/17/2018',
    endDate: '',
	},
];

const education = [
  {
    title: 'B.S in Computer Science | Minor in Leadership Studies',
    location: 'Kansas State University',
    image: 'https://placeimg.com/803/803/tech',
    startDate: '2014',
    endDate: '2017',
  }
]

function About() {
  return (
    <PageWrapper>
			<EmploymentSection employment={ employment } />
      <EducationSection education={ education } />
    </PageWrapper>
  );
}
export default About;
