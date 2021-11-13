import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import { colors } from '../styles';
import Header from './Header';
import Footer from './Footer';

const defaultPageStyles = css`
  background-color: ${colors.color1};
`;

function PageWrapper({ children, className }) {
  return (
    <div className={ css`${className} ${defaultPageStyles}` }>
      <Header />
      { children }
      <Footer />
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

PageWrapper.defaultProps = {
  className: undefined,
};

export default PageWrapper;
