import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import HeroImage from './HeroImage';
import BioSection from './BioSection';

function IndexPage() {
  return (
    <PageWrapper>
      <HeroImage />
      <BioSection />
    </PageWrapper>
  );
}
export default IndexPage;
