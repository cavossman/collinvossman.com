import React, { Component } from 'react';

// import JSONBeautifier from '../JSONBeautifier/JSONBeautifier';
import ToolTable from '../Components/ToolTable/ToolTable';

// Frontend
import angular from '../images/tools/angular.png';
import react from '../images/tools/react.png';
import html from '../images/tools/html5.png';

// Backend
import mongodb from '../images/tools/mongodb.png';
import node from '../images/tools/nodejs.png';
import mysql from '../images/tools/mysql.png';

// Utilities
import git from '../images/tools/git.png';
import atom from '../images/tools/atom.png';

// OS
import windows from '../images/tools/windows.png';
import macos from '../images/tools/macos.png';


import './Tools.css';


let tool_list = [
  {
    'category': 'Frontend',
    'images': [
      angular,
      react,
      html
    ]
  },
  {
    'category': 'Backend',
    'images': [
      node,
      mongodb,
      mysql
    ]
  },
  {
    'category': 'Utilities',
    'images': [
      git,
      atom
    ]
  },
  {
    'category': 'OS',
    'images': [
      windows,
      macos
    ]
  }
];

class Tools extends Component {
  render() {
    return (
      <div className="page">
        <h2 style={{'color': '#fff'}}>My Development tools</h2>
        <ToolTable tools={tool_list} />
      </div>
    );
  }
}

// Put back in page eventually
// Tools page.  Put stuff like handy things im working on in here.
// <JSONBeautifier />
export default Tools;
