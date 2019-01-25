/**
 * PageTransition / Pages / Home
 *
 * Example of home page
 */

import React from 'react';
import { Link } from 'react-router-dom';

const User = ({
    match, // eslint-disable-line
}) => (
    <article className="page page--user transition-item">
        <section className="block">
            <h3>
                {`User #${match.params.id}`}
            </h3>
            <p>The main homepage. Choose a link from the list below to see the page transition</p>
            <p><Link to="/page-transition">Home</Link></p>
        </section>
    </article>
);

export default User;
