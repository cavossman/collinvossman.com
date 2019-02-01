import React, { Component } from 'react';

import './ToolTable.css';

class ToolTable extends Component {
  render() {
    return (
      <div className="tool-table">
        {this.props.tools.map((tool, index) => {
          return (
            <div className="category-row" key={ index }>
              <div className="tool-category">
                <span>{ tool.category }</span>
              </div>
              {tool.images.map((image, image_index) => {
                return (
                  <img className="tool" key={ image_index } src={ image } alt="" />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
export default ToolTable;
