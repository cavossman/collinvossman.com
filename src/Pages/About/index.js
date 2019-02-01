import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Timeline from '../../components/Timeline';

const employment = [
	{
		title: 'Lorem ipsum dolor sit',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
		image: 'https://placeimg.com/801/801/tech',
		year: 2011,
	},
  {
		title: 'Lorem ipsum dolor sit',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
		image: 'https://placeimg.com/802/802/tech',
		year: 2017,
	},
  {
		title: 'Lorem ipsum dolor sit',
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.',
		image: 'https://placeimg.com/803/803/tech',
		year: 2018,
	},
];

function About() {
  return (
    <PageWrapper>
      <div class="employment">
        <Timeline
          data={employment}
        />
      </div>
    </PageWrapper>
  );
}
export default About;
