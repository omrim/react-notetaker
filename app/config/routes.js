import React  from 'react';
const Main = require('../components/Main');
const Home = require('../components/Home');
import Router from 'react-router';
const Route = Router.Route;
const IndexRoute = Router.IndexRoute;

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
    </Route>
)
