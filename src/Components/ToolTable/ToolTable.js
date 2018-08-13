// TODO: Move out of table and make more responsive
// TODO: Add alt tags to the tool list object and display on website

import React, { Component } from 'react';

import './ToolTable.css';
class ToolTable extends Component {
  render() {
    return (
      <div className="tool-table">
        {this.props.tools.map(function(tool, index) {
          return (
            <div className="category-row" key={index}>
              <span className="tool-category">{tool.category}</span>
              {tool.images.map(function(image, image_index){
                return (
                  <img className="tool" key={image_index} src={image} alt="" />
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
