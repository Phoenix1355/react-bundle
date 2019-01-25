/**
 * PageTransition / Pages / Home
 *
 * Example of home page
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <article className="page page--home transition-item">
        <section className="block">
            <h3>Home</h3>
            <p>
                The main homepage. Choose a link from the list below to see the page transition
            </p>
            <ul>
                <li><Link to="/page-transition/user/Phoenix1355">Phoenix1355</Link></li>
                <li><Link to="/page-transition/user/GamerGod88">GamerGod88</Link></li>
                <li><Link to="/page-transition/user/xxCODLIFExx">xxCODLIFExx</Link></li>
            </ul>
        </section>
    </article>
);

export default Home;
