import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import Col1 from '../../templates/Col1';
import ToolSelector from './ToolSelector';

function Tools() {
  return (
    <PageWrapper>
      <Col1>
        <ToolSelector />
      </Col1>
    </PageWrapper>
  );
}
export default Tools;
