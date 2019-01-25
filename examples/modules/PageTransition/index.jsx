/**
 * PageTransition
 *
 * Animation effect for page transitions
 */

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/Home';
import UserPage from './Pages/User';

const PageTransition = ({
    children, // eslint-disable-line
}) => (
    <div>
        {children}
    </div>
);

class Page extends Component {
    render() {
        return (
            <PageTransition timeout={600}>
                <Switch location={this.props.location}>
                    <Route exact path="/page-transition/" component={HomePage} />
                    <Route exact path="/page-transition/user/:id" component={UserPage} />
                </Switch>
            </PageTransition>
        );
    }
}

export default Page;
