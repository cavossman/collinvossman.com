import React from 'react';
import { css } from 'emotion';

// tools
import json from '../../components/JSONVisualizer';

const toolbelt = [
  {
    'title': 'JSON Visualizer',
    'component': json,
    'isInDev': true,
  }
];

const styles = css`
  display: block;
  text-align: center;
  .ts {
    background-color: #fff;
    display: inline-block;
    padding: 20px 30px;
    margin: 0 auto;
  }
  .dev-message {
    color: #fff;
    padding: 150px 0 500px;
  }
`;

class ToolSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      activeToolIndex: 0,
      inDev: true,
    };
    this.getActiveTool = this.getActiveTool.bind(this);
  }

  getActiveTool() {
    if (this.state.active) {
      return toolbelt[this.state.activeToolIndex].component;
    } else {
      return (
        <div className="pick-a-tool">Pick a tool</div>
      )
    }
  }

  render() {
    const ActiveTool = this.getActiveTool();
    if (this.state.inDev) {
      return (
        <div className={ styles }>
          <div className="dev-message">
            {`My sincerest appologies.  I have removed the tools section as I work on sprucing this section up. `}
          </div>
        </div>
      )
    }
    return (
      <div className={ styles }>
        <div className="ts">
          {
            toolbelt.map((tool, index) => {
              return (
                <div className="ts__option" key={ tool.title } onClick={() => this.setState({activeToolIndex: index})}>{ tool.title }</div>
              );
            })
          }
        </div>
        <ActiveTool />
      </div>
    );
  }
}
export default ToolSelector;
