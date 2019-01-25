/**
 * The default home page, listing all the modules
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './home.scss';

import modules from './modules';

const ModuleItem = ({
    title,
    date,
    ...props
}) => (
    <li className="list-item">
        <Link {...props}>
            <p>{title}</p>
            <span className="date">{date}</span>
        </Link>
    </li>
);
ModuleItem.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};


const HomePage = () => (
    <article className="page--default">
        <section className="hero">
            <div className="hero__inner">
                <div className="hero__header">
                    <h1>React Bundle</h1>
                    <h3>Example Page</h3>
                </div>
                <div className="hero__content">
                    <p>
                        {'The following shows each module from React Bundle, and an example on how they each can be used and integrated into your projects.'}
                    </p>
                </div>
            </div>
        </section>
        <section className="list">
            <div className="list__inner">
                <div className="list__content">
                    <ul>
                        {modules.map(item => (
                            <ModuleItem
                                key={item.id}
                                title={item.title}
                                date={item.date}
                                to={item.to}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    </article>
);

export default HomePage;
