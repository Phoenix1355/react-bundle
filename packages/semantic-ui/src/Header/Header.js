/**
 * Header component
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './header.scss';

class Header extends Component {
    static propTypes = {
        /* Used if header should span across the page */
        full: PropTypes.bool,

        /* Default child components */
        children: PropTypes.node.isRequired,
    };

    static defaultProps = {
        /* Default to false (1440px width) */
        full: false,
    };

    constructor(props) {
        super(props);

        this.state = {
            collapsed: false,
        };
    }

    render() {
        const {
            full,
            children,
        } = this.props;

        const {
            collapsed,
        } = this.state;

        const classes = [
            styles.header,
        ];

        if (full) {
            classes.push(styles['header--full']);
        }

        if (collapsed) {
            classes.push(styles['header--collapsed']);
        }

        return (
            <header className={classes.join(' ')} role="heading">
                <div className={styles.header__inner}>
                    {children}
                </div>
            </header>
        );
    }
}

export default Header;
