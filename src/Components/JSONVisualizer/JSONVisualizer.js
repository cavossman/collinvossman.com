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
      disableClear: true,
      disableParse: true,
      disableEnhance: true,
      displayResults: false
    };
    this.registerTags = this.registerTags.bind(this);
    this.displaySelectedKeyValuePairs = this.displaySelectedKeyValuePairs.bind(this);
    this.clearJSON = this.clearJSON.bind(this);

    this.handleJSONUpdate = this.handleJSONUpdate.bind(this);
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
      // setState is asynchronous so call parseInput after tags array is empty.
      this.setState({'tags': []}, () => {
        this.parseInput(input);
      });
    }
  }

  clearJSON() {
    this.refs._input.value = '';
    this.setState({'tags': []});
    this.setState({'disableEnhance': true});
    this.setState({'disableParse': true});
    this.setState({'disableClear': true});
  }

  handleJSONUpdate() {
    if (this.refs._input.value.length > 0) {
      this.setState({'disableParse': false});
      this.setState({'disableClear': false});
    }
    else {
      this.setState({'disableParse': true});
      this.setState({'disableClear': true});
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
      }
    });
    results = JSON.stringify(results) === '{}'  ? 'You have not selected any keys' : results;
    this.setState({'results': results});
  }

  // BUG: When pressing Parse a second time without clearing Enhance only displays null
  // Tags on the right aren't refreshing each time parse is hit.
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
      this.setState({'tags': tagsArr});
      this.setState({'disableEnhance': false});
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
    const { tags, help, error, displayResults } = this.state;
    const { disableClear, disableParse, disableEnhance } = this.state;
    return (
      <div className="JSONVisualizer">
        <h1>JSON Visualizer</h1>
        <div className="proj-container">
          <div className="JSONContainer">
            <textarea id="input" className="input" spellCheck="false" placeholder="Paste your JSON object here." ref="_input" onChange={ this.handleJSONUpdate }/>
            <div className="selector">
              <div className="selector-head">
                <h2>Select Keys</h2>
              </div>
              <div className="key-container">
                { tags.map((tag, index) => {
                    return <Tag tag={ tag } key={ index } />
                  })
                }
              </div>
            </div>
          </div>
          <div className="scripts-container">
            <div className={ 'run-script prevent-select ' + (disableClear ? 'disabled' : '') }disabled={ this.state.disableClear } onClick={ this.clearJSON }>
              Clear
            </div>
            <div className={ 'run-script prevent-select ' + (disableParse ? 'disabled' : '') }disabled={ this.state.disableParse } onClick={ this.registerTags }>
              Parse
            </div>
            <div className={ 'run-script prevent-select ' + (disableEnhance ? 'disabled' : '') }disabled={ this.state.disableEnhance } onClick={ this.displaySelectedKeyValuePairs }>
              Enhance
            </div>
            <div className="help prevent-select" onMouseEnter={ this.handleShowTooltip } onMouseLeave={ this.handleHideTooltip }>
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
          </div>

          { error &&
            <div className="error">
              <div className="dismiss prevent-select" onClick={ this.dismissWarning } >&#10006;</div>
              <h3>There is an error in your syntax. Please try again</h3>
            </div>
          }
          { displayResults &&
            <div className="results">
              <div className="dismiss prevent-select" onClick={ this.dismissResults } >&#10006;</div>
              <pre>{ JSON.stringify(this.state.results, null, 2) }</pre>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default JSONVisualizer;
