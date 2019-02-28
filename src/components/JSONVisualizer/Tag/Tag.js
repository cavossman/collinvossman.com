import React from 'react';
import { css } from 'emotion';

const styles = css`
  .tag {
    color: #000;
    width: fit-content;
    padding: 8px;
    border-radius: 3px;
    display: inline-block;
    cursor: pointer;
    position: relative;
    text-align: left;  
  }

  .tag-unselected {
    background-color: #fff;
  }
  .tag-selected {
    background-color: #91a2dc;
  }
  .preview {
    position: absolute;
    left: 0;
    top: calc(100% + 3px);
    padding: 5px;
    border: 1px solid #000;
    border-radius: 3px;
    z-index: 10;
    background-color: #fff;
  }
  .preview.tag-selected {
    display: block;
  }
  .preview.tag-unselected {
    display: none;
  }
`;

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: this.props.tag
    };
    this.toggleActiveTag = this.toggleActiveTag.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  toggleActiveTag() {
    let tag = this.state.tag;
    if (!this.state.tag.selected) {
      tag.selected = true;
    } else {
      tag.selected = false;
    }
    this.setState({tag});
  }

  mouseEnter() {
    this.setState({ mouseOver: true });
  }

  mouseLeave() {
    this.setState({ mouseOver: false });
  }

  // Convert value to string and shorten if it's longer than 100 characters
  beautifyText(value) {
    let valString;
    if (typeof value === 'object') valString = JSON.stringify(value, null, 2);
    else valString = value.toString();
    if (valString.length > 100) return valString.substring(0, 100) +'...'
    return valString;
  }

  // TODO: Improve the styling of value preview
  render() {
    const title = this.state.tag.key;
    const value = this.state.tag.value;
    return (
      <div className={ styles }>
        <div className={ 'preview ' + (this.state.mouseOver ? 'tag-selected' : 'tag-unselected') } >
          { this.beautifyText(value) }
        </div>
        <div className={ 'tag ' + (this.state.tag.selected ? 'tag-selected' : 'tag-unselected') } onClick={ this.toggleActiveTag } onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} >
          { title }
        </div>
      </div>
    );
  }
}

export default Tag;
