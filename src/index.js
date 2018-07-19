import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Entry';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Entry />
), document.getElementById('root'));
registerServiceWorker();
