import React from 'react';
import PropTypes from 'prop-types';

import styles from './hero.scss';

const Hero = ({
    title,
    children,
}) => (
    <section className={styles.hero}>
        <div className={styles.hero__inner}>
            <div className={styles.hero__header}>
                <h1>{title}</h1>
            </div>
            <div className={styles.hero__content}>
                {children}
            </div>
        </div>
    </section>
);

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Hero;
