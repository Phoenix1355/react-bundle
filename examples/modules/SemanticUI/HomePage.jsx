/**
 * Home page
 */

import React from 'react';
import { Page, Hero } from 'semantic-ui/lib';

const HomePage = () => (
    <Page id="home">
        <Hero
            title="Welcome to my website!"
            description="This is the descriptive content of the hero section, that will be displayed as sub-header for the title."
        />
    </Page>
);

export default HomePage;
