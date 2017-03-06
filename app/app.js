import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
const routes = require('./config/routes');

ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElemenyById('app')
)
