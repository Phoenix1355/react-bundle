import React from 'react';
import PropTypes from 'prop-types';

const Page = ({
    children,
    ...props
}) => (
    <article
        {...props}
    >
        {children}
    </article>
);
Page.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Page;
