import React from 'react';
import { css } from 'emotion';
import PageWrapper from '../../components/PageWrapper';
import Col1 from '../../templates/Col1';

const styles = css`
  color: #fff;
  text-align: center;
  padding: 280px 0;
`;

function NotFound() {
  return (
    <PageWrapper>
      <Col1>
        <div className={styles}>
          <h1>ERROR 404</h1>
          <span>Looks you may be lost.</span>
        </div>
      </Col1>
    </PageWrapper>
  );
}

export default NotFound;
