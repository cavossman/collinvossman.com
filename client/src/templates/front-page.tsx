import { FC } from 'react';
import { motion } from 'framer-motion';
import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import Stats from '@/components/Home/Stats';
import Hero from '@/components/Home/Hero';

interface Props {
  data: any;
}

const FrontPage: FC<Props> = ({ data: { page } }) => {
  console.log(page);
  return (
    <Layout>
      <Hero />
      <Stats />
    </Layout>
  );
};

export default FrontPage;

export const pageQuery = graphql`
  query FrontPage($id: String!) {
    page: strapiPages(id: { eq: $id }) {
      id
      title
      body
      published_at(formatString: "MMMM DD, YYYY")
    }
  }
`;
