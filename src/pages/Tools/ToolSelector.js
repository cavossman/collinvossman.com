import React from 'react';
import { css } from 'emotion';
import json from '../../components/JSONVisualizer';

const styles = css`
  padding: 100px 0;
`;

function ToolSelector() {
  let activeToolIndex = 0;
  const toolbelt = [
    {
      'title': 'JSON Beautifier',
      'component': json,
    }
  ];
  const ActiveTool = toolbelt[activeToolIndex].component;
  return (
    <div className={ styles }>
      {
        toolbelt.map(tool => {
          return (
            <div className="tool-selector__option" key={ tool.title }>{ tool.component }</div>
          );
        })
      }
      <ActiveTool />
    </div>
  );
}
export default ToolSelector;
