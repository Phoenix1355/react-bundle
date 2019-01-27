/**
 * Semantic UI
 *
 * Page created using the semantic ui package
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Site } from 'semantic-ui/lib';

import Header from './Header';

import HomePage from './HomePage';
import BlogPage from './BlogPage';

console.log(Header);

const App = () => (
    <Site
        header={Header}
    >
        <Switch>
            <Route path="/semantic-ui" exact component={HomePage} />
            <Route path="/semantic-ui/blog" component={BlogPage} />
        </Switch>
    </Site>
);

export default App;
