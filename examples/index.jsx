/**
 * Index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import App from './default/App';

const history = createHistory({
    basename: '/',
});

const MOUNT_NODE = document.getElementById('app');

const render = () => {
    ReactDOM.render(
        <Router history={history}>
            <App />
        </Router>,
        MOUNT_NODE
    );
};

if (module.hot) {
    module.hot.accept([
        './default/App',
    ], () => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
    });
}

render();
