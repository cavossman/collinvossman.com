import React, { Component } from 'react';

import './Tag.css';

class Tag extends Component {
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
      <div className="tag">
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
