import React, { Component } from 'react';

import Tag from './Tag/Tag';

import arrow_right from '../../images/arrow-right.svg';

import './JSONBeautifier.css';

class JSONBeautifier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      error: null
    };
    this.registerTags = this.registerTags.bind(this);
    this.dismissWarning = this.dismissWarning.bind(this);
  }

  dismissWarning() {
    this.setState({'error': null});
  }

  registerTags() {
    let input = this.refs._input.value;
    if (!!input) {
      this.parseInput(input);
    }
  }

  parseInput(input) {
    try {
       this.setState({'tags': Object.keys(JSON.parse(input))});
    } catch (error) {
      switch (error.name) {
        case 'SyntaxError':
          this.setState({'error': 'SyntaxError'});
          break;
        default:
          console.warn(error);
      }
    }
  }

  render() {
    const tags = this.state.tags;
    const error = this.state.error;
    return (
      <div className="JSONBeautifier">
        <h1>JSON Visualizer</h1>
        <div className="proj-container">
          <textarea className="input" spellCheck="false" placeholder="Paste your JSON object here." ref="_input" />
          <div className="selector">
            <h2>Select Keys</h2>
            <div className="key-container">
              { tags.map((tag, index) => {
                  return <Tag title={ tag } key={ index } />
                })
              }
            </div>
          </div>
          <div className="run-script" onClick={ this.registerTags }>
            <img src={ arrow_right } alt="" />
          </div>
          { error &&
            <div className="error" onClick={ this.dismissWarning }>
              <h3>There is an error in your syntax. Please try again</h3>
              <span>Click to dismiss</span>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default JSONBeautifier;
