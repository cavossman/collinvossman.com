import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const defaultTemplateStyles = css`
  padding-top: 120px;
`;

function Col1({ children, className }) {
  return (
    <div className={ css`${className} ${defaultTemplateStyles}` }>
      {children}
    </div>
  );
}

Col1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Col1.defaultProps = {
  className: undefined,
};


export default Col1;
