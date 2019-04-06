import React from 'react';
import { css } from 'emotion';
import PageWrapper from '../../components/PageWrapper';
import Col1 from '../../templates/Col1';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'mag.collinvossman.com',
    description: 'Website built using Wordpress for updating content.  Utilizes React and the Wordpress REST API.',
    images: [
      '/images/projects/mag/mag.png',
      '/images/projects/mag/mag.gif',
    ],
    link: 'https://mag.collinvossman.com'
  },
  {
    title: 'allaboutjv.com',
    description: 'Website for my wife to display some of her photography, writing and music. Custom admin section to add and update content utilizing Express and MongoDB.',
    images: [
      '/images/projects/allaboutjv.com/homepage.png',
      '/images/projects/allaboutjv.com/photos.png'
    ],
    link: 'http://allaboutjv.com'
  },
  {
    title: 'Micro Cloud',
    description: 'Content Management System (CMS) for Micro Map applications.  API utilizes Node, Express and MongoDB.  Interface utilizes React.',
    images: [
      '/images/projects/micro-cloud/interface-buildings.png'
    ]
  },
  {
    title: 'Micro Map',
    description: 'Mobile application to help students navigate a new unfamiliar campus.  Currently Android only.  Writen in Android Studio using Java and XML.',
    images: [
      '/images/projects/micro-map/building_view.png',
      '/images/projects/micro-map/campus_pins.png'
    ]
  }
];

const styles = css`
  .page-title {
    color: #fff;
    text-align: center;
    letter-spacing: 0.9px;
    font-size: 1.75rem;
  }
`;

function Projects() {
  return (
    <PageWrapper>
      <Col1>
        <div className={styles}>
          <h1 className="page-title">PERSONAL PROJECTS</h1>
          {
            projects.map(project => {
              return (
                <ProjectCard
                  title={project.title}
                  featuredImages={project.images}
                  description={project.description}
                  key={project.title}
                />
              )
            })
          }
        </div>
      </Col1>
    </PageWrapper>
  );
}
export default Projects;
