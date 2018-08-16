import React, { Component } from 'react';

import './Tag.css';

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      isClicked: false
    };
    this.toggleActiveTag = this.toggleActiveTag.bind(this);
  }

  toggleActiveTag() {
    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  render() {
    const title = this.state.title;
    return (
      <div className={ 'key-tag ' + (this.state.isClicked ? 'tag-selected' : 'tag-unselected') } onClick={ this.toggleActiveTag }>
        { title }
      </div>
    );
  }
}

export default Tag;
