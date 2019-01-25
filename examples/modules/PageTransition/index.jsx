/**
 * PageTransition
 *
 * Animation effect for page transitions
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { PageTransition } from '../../../packages/page-transition/lib/bundle';

import HomePage from './Pages/Home';
import UserPage from './Pages/User';

const Page = ({
    location, // eslint-disable-line
}) => (
    <PageTransition
        timeout={600}
    >
        <Switch location={location}>
            <Route exact path="/page-transition/" component={HomePage} />
            <Route exact path="/page-transition/user/:id" component={UserPage} />
        </Switch>
    </PageTransition>
);

export default Page;
