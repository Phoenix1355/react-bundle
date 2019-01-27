import React from 'react';
import PropTypes from 'prop-types';

import styles from './hero.scss';

const Hero = ({
    title,
    description,
    children,
}) => (
    <section className={styles.hero}>
        <div className={styles.hero__inner}>
            <div className={styles.hero__header}>
                <h1>{title}</h1>
            </div>
            <div className={styles.hero__content}>
                { description ? (
                    <p>{description}</p>
                ) : children }
            </div>
        </div>
    </section>
);

Hero.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node,
};
Hero.defaultProps = {
    description: null,
    children: null,
};

export default Hero;
