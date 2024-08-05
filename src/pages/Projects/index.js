import React from 'react';
import { css } from 'emotion';
import PageWrapper from '../../components/PageWrapper';
import Col1 from '../../templates/Col1';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'REPL',
    description: 'Run code in isolated docker containers to create entire virtual environments. Built with Docker, Terraform, AWS, Next, and TypeScript.',
    images: [
      '/images/projects/mew/create.png',
      '/images/projects/mew/repl.png',
    ],
  },
  {
    title: 'Headless WordPress',
    description: 'Website built using Wordpress for updating content.  Utilizes React and the Wordpress REST API.',
    images: [
      '/images/projects/mag/mag.png',
      '/images/projects/mag/mobile-mag.gif',
    ],
  },
  {
    title: 'All About JV',
    description: 'Website for my wife to display some of her photography, writing and music. Custom admin section to add and update content utilizing Express and MongoDB.',
    images: [
      '/images/projects/allaboutjv.com/homepage.png',
      '/images/projects/allaboutjv.com/photos.png'
    ],
  },
  {
    title: 'Micro Cloud',
    description: 'CRUD application for Micro Map - allowing updates to building and campus information.  API utilizes Node, Express and MongoDB.  Interface utilizes React.',
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
          <h1 className="page-title mb-5">PERSONAL PROJECTS</h1>
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
