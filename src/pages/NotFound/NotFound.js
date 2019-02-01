import React, { Component } from 'react';

import './NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <div className="page not-found">
        <h1>ERROR 404</h1>
        <span>Looks you may be lost.</span>
      </div>
    );
  }
}

export default NotFound;
