import React, { Component } from 'react';

class NotFound extends Component {

  render() {
    return (
      <div className="page" style={{"minHeight": "680px"}}>
        <h1 style={{'color':'#fff'}}>ERROR 404</h1>
        <br />
        <span style={{'color':'#fff'}}>Looks like I ruined my server configuration or you may be lost.</span>
      </div>
    );
  }
}

export default NotFound;
