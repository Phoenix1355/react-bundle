/**
 * Default App
 *
 * This component is the skelenton around the actual pages, and should only
 * contain code that should be seen on pages. (E.g. Navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import HomePage from './HomePage';

import modules from './modules';

// Import global styling that applies to all modules
import './global.scss';

const App = () => (
    <div className="site">
        <Helmet titleTemplate="%s &mdash; React Bundle">
            <title>Home</title>
            <meta name="description" content="React Bundle example site" />
        </Helmet>
        <main className="main" id="main">
            <Switch>
                <Route exact path="/" component={HomePage} />
                {modules.map(item => (
                    <Route
                        key={item.to}
                        path={item.to}
                        component={item.component}
                    />
                ))}
            </Switch>
        </main>
    </div>
);

export default App;
