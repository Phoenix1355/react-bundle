/**
 * Displays a footer, which can be seperated into columns
 * using the Footer.Column component
 */

import React from 'react';
import PropTypes from 'prop-types';

import FooterColumn from './FooterColumn';

import styles from './footer.scss';

const Footer = ({
    className,
    children,
}) => (
    <footer className={[styles.footer, className].join(' ')} role="heading">
        <div className={styles.footer__inner}>
            {children}
        </div>
    </footer>
);
Footer.propTypes = {
    /* Default child components */
    children: PropTypes.node.isRequired,

    /* Allows for extra classNames for custom styling */
    className: PropTypes.string,
};
Footer.defaultProps = {
    className: null,
};
/* Component Statics */
Footer.Column = FooterColumn;

export default Footer;
