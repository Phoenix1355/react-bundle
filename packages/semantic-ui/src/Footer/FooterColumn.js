/**
 * FooterColumn used to split the footer into divided columns.
 * Each column can be customized with a absolute or relative width,
 * using either percentages or pixels. Set to auto by default (all
 * get the same width)
 */

import React from 'react';
import PropTypes from 'prop-types';

import styles from './footer.scss';

const FooterColumn = ({
    children,
    width,
}) => {
    if (width !== 'auto') {
        console.log('not implemented yet!');
    }

    return (
        <div className={styles.footer__column}>
            {children}
        </div>
    );
};
FooterColumn.propTypes = {
    /* Default child components */
    children: PropTypes.node.isRequired,

    /* The width of the column */
    width: PropTypes.oneOf([
        'auto',
        'fixed',
    ]),
};
FooterColumn.defaultProps = {
    width: 'auto',
};

export default FooterColumn;
