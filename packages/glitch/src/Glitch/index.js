import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import styles from './glitch.scss';

const Glitch = ({
    children,
}) => (
    <div className={styles.glitch}>
        {_.times(5, i => (
            <div
                key={i}
                className={styles.glitch__mask}
            >
                <span>{children}</span>
            </div>
        ))}
        <span>{children}</span>
    </div>
);
Glitch.propTypes = {
    // The glitch content
    children: PropTypes.node.isRequired,
};

export default Glitch;
