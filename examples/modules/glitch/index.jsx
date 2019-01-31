/**
 * PageTransition
 *
 * Animation effect for page transitions
 */

import React from 'react';
import { Glitch } from 'glitch/lib';

import './style.scss';

const Page = ({
    location, // eslint-disable-line
}) => (
    <article className="page--glitch">
        <section className="hero">
            <div className="hero__inner">
                <div className="hero__header">
                    <h1>Glitch</h1>
                    <p>Examples</p>
                </div>
            </div>
        </section>
        <section className="block">
            <div className="block__inner">
                <div className="block__content">
                    <Glitch>
                        <button
                            type="button"
                            className="button"
                        >
                            Test glitch
                        </button>
                    </Glitch>
                    <button
                        type="button"
                        className="button"
                    >
                        <Glitch>
                            Test glitch
                        </Glitch>
                    </button>
                </div>
                <div className="block__content">
                    <Glitch>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum voluptas voluptatum asperiores neque harum itaque quia ipsa cumque pariatur sequi.</p>
                    </Glitch>
                </div>
            </div>
        </section>
    </article>
);

export default Page;
