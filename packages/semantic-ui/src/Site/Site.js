/**
 * Main wrapper for the site. Recommended use as a parent
 * for your routing, to.
 */

import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

const Site = ({
    className,
    header,
    footer,
    children,
    ...props
}) => (
    <div
        className={['site', className].join(' ')}
        {...props}
    >
        {header}
        <main className="main" id="main" role="main">
            {children}
        </main>
        {footer}
    </div>
);
Site.propTypes = {
    /* Allows extra classname for custom page styling */
    className: PropTypes.string,

    /* A header component to render on all pages */
    header: PropTypes.node,

    /* A footer component to render on all pages */
    footer: PropTypes.node,

    /* The child content. Can be routing or just a simple page component */
    children: PropTypes.node.isRequired,
};
Site.defaultProps = {
    className: null,
    header: null,
    footer: null,
};

export default Site;
