import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import LoadAnimation from '../../components/LoadAnimation';
import HeroImage from './HeroImage';
import BioSection from './BioSection';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }

    this.finishedLoading = this.finishedLoading.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('noscroll');
  }

  finishedLoading() {
    document.body.classList.remove('noscroll');
    this.setState({ loading: false });
  }

  render() {
    let { loading } = this.state;
    return (
      <PageWrapper>
        {
          loading &&
          <LoadAnimation
            finishedLoading={ this.finishedLoading }
          />
        }
        <HeroImage />
        <BioSection />
      </PageWrapper>
    );
  }
}
export default IndexPage;
