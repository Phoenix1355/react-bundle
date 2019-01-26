/**
 * Semantic UI
 *
 * Page created using the semantic ui package
 */

import React from 'react';

import { Page, Hero } from '../../../packages/semantic-ui/lib';

const App = () => (
    <Page id="home">
        <Hero title="Welcome to my website!">
            This is the descriptive content of the hero
            section, that will be displayed as sub-header for
            the title.
        </Hero>
    </Page>
);

export default App;
