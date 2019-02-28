import React, { Component } from 'react';
import { css } from 'emotion';
import Tag from './Tag/Tag';

const styles = css`
  position: relative;
  color: #fff;
  max-width: 900px;
  margin: 0 auto;
  @media (max-width: 900px) {
    .JSONBeautifier {
      margin: 0 15px;
    }
  }
  .proj-container {
    position: relative;
    height: auto;
    border: 3px solid #333;
  }
  .JSONContainer {
    height: 600px;
  }
  .input {
    border: none;
    background: #333;
    color: #696;
    width: 70%;
    height: 100%;
    display: inline-block;
    resize: none;
    padding: 12px;
  }
  .input:focus {
    outline: none;
  }
  .input:focus::-webkit-input-placeholder { color:transparent; }
  .input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */
  .input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */
  .input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */


  .scripts-container {
    width: 100%;
    background-color: #fff;
    text-align: center;
  }
  .run-script {
    color: #000;
    width: 100px;
    padding: 20px;
    cursor: pointer;
    display: inline-block;
    border-left: 1px solid #000;
  }
  .run-script:nth-last-child(2) {
    border-right: 1px solid #000;
  }
  .run-script:hover {
    background-color: #b1b1b1;
    padding-bottom: 17px;
    border-bottom: 3px solid red;
  }
  .run-script img {
    height: 30px;
    width: 30px;
    margin-top: 15px;
    margin-left: 6px;
  }

  .selector {
    width: 30%;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    overflow-y: scroll;
  }
  .selector-head {

  }
  .selector-head h2 {
    margin: 10px;
  }

  .key-container {
    margin: 0;
    height: 550px;
    overflow-y: scroll;
  }
  ::-webkit-scrollbar {
      display: none;
  }
  .error {
    position: absolute;
    top: 0;
    width:100%;
    height: 100%;
    background-color: #9c4747;
    color: #fff;
    z-index: 10;
  }
  .error h3 {
    font-size: 36px;
    padding: 200px 0;
  }

  .help {
    background-color: #333;
    border-radius: 50%;
    width: fit-content;
    padding: 10px 12px;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: 15px;
    bottom: 7px;
  }

  .tooltip {
    position: absolute;
    bottom: calc(100% + 10px);
    background-color: #fff;
    width: 250px;
    padding: 20px;
    color: #000;
    z-index: 30;
    text-align: left;
    border: 1px solid #000;
  }

  .results {
    text-align: left;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    color: #696;
    z-index: 10;
    overflow-y: scroll;
  }
  .results h3 {
    font-size: 36px;
    padding: 200px 0;
  }
  .results pre {
    max-width: 100%;
  }
  .dismiss {
    cursor: pointer;
    float: right;
    font-size: 40px;
    margin-right: 15px;
  }
  .disabled {
    pointer-events: none;
    background-color: #e2e2e2 !important;
  }
`;

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
      <div className={ styles }>
        <h1>JSON Visualizer</h1>
        <div className="proj-container">
          <div className="JSONContainer">
            <textarea id="input" className="input" spellCheck="false" placeholder="Paste your JSON object here." ref="_input" onChange={ this.handleJSONUpdate } />
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
