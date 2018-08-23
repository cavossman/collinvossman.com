import React, { Component } from 'react';

import Tag from './Tag/Tag';

import './JSONVisualizer.css';

class JSONVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      error: null,
      help: false,
      results: null,
      displayResults: false
    };
    this.registerTags = this.registerTags.bind(this);
    this.displaySelectedKeyValuePairs = this.displaySelectedKeyValuePairs.bind(this);

    this.handleShowTooltip = this.handleShowTooltip.bind(this);
    this.handleHideTooltip = this.handleHideTooltip.bind(this);
    this.dismissWarning = this.dismissWarning.bind(this);
    this.dismissResults = this.dismissResults.bind(this);
  }

  dismissWarning() {
    this.setState({'error': null});
  }

  dismissResults() {
    this.setState({'results': null})
    this.setState({'displayResults': false});
  }

  registerTags() {
    let input = this.refs._input.value;
    if (!!input) {
      this.parseInput(input);
    }
  }

  handleShowTooltip() {
    this.setState({'help': true});
  }

  handleHideTooltip() {
    this.setState({'help': false});
  }

  displaySelectedKeyValuePairs() {
    this.setState({'displayResults': true});
    let results = {};
    this.state.tags.forEach((tag) => {
      if (tag.selected) {
        let key = tag.key;
        let obj = {};
        obj[key] = tag.value;

        results = {...results, ...obj};
        this.setState({'results': results});
      }
    })
  }

  // may be able to change map to forEach?
  parseInput(input) {
    try {
      let parsedInput = JSON.parse(input);
      let keys = Object.keys(parsedInput);
      let tagsArr = [];

      keys.forEach((key) => {
        var obj = {
                      'key': key,
                      'value': parsedInput[key],
                      'selected': false
                    };
        tagsArr.push(obj);
      });
      // let values = Object.values(parseInput);
      this.setState({'tags': tagsArr});
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

  // TODO: Disable buttons based upon state.
  render() {
    const tags = this.state.tags;
    const help = this.state.help;
    const error = this.state.error;
    const displayResults = this.state.displayResults;
    return (
      <div className="JSONBeautifier">
        <h1>JSON Visualizer</h1>
        <div className="proj-container">
          <textarea className="input" spellCheck="false" placeholder="Paste your JSON object here." ref="_input" />
          <div className="selector">
            <h2>Select Keys</h2>
            <div className="key-container">
              { tags.map((tag, index) => {
                  return <Tag tag={ tag } key={ index } />
                })
              }
            </div>
          </div>
          <div className="run-script" onClick={ this.registerTags }>
            Parse
          </div>
          <div className="run-script" onClick={ this.displaySelectedKeyValuePairs }>
            Enhance
          </div>
          <div className="help" onMouseEnter={ this.handleShowTooltip } onMouseLeave={ this.handleHideTooltip }>
            <span role="img" aria-label="Question Mark">&#10068;</span>
            { help &&
              <div className="tooltip">
                TIPS:<br />
                1. Paste JSON object on the left<br />
                2. Click parse<br />
                3. Select keys on the right<br />
                4. Click enhance<br />
                5. Ignore bugs for the time being<br />
              </div>
            }
          </div>

          { error &&
            <div className="error">
              <div className="dismiss" onClick={ this.dismissWarning } >&#10006;</div>
              <h3>There is an error in your syntax. Please try again</h3>
            </div>
          }
          { displayResults &&
            <div className="results">
              <div className="dismiss" onClick={ this.dismissResults } >&#10006;</div>
              <pre>{ JSON.stringify(this.state.results, null, 2) }</pre>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default JSONVisualizer;
