import Layout from '@/components/Layout';
import { Box, Container, Flex } from '@chakra-ui/layout';
import { chakra } from '@chakra-ui/system';
import { StaticQuery, graphql } from 'gatsby';
import { FC } from 'react';

interface Props {}

const ExperiencePage: FC<Props> = () => {
  return (
    <StaticQuery
      query={graphql`
        query Projects {
          allStrapiProjects {
            nodes {
              id
              title
              description
            }
          }
        }
      `}
      render={({ allStrapiProjects: { nodes: projects } }) => {
        console.log(projects);
        return (
          <Layout>
            <Container maxW="container.lg" my={5}>
              <chakra.h1 fontWeight="bold" fontSize={32}>
                Recent Side Projects
              </chakra.h1>
              <chakra.span>
                Outside of my 9 to 5 I like to play around with new tech.
              </chakra.span>
              <Flex>
                {projects &&
                  projects.map((project) => (
                    <Box key={project.title}>{project.title}</Box>
                  ))}
              </Flex>
            </Container>
          </Layout>
        );
      }}
    />
  );
};

export default ExperiencePage;
