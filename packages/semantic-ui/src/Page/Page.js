import React from 'react';
import PropTypes from 'prop-types';

const Page = ({
    id,
    className,
    children,
    ...props
}) => (
    <article
        className={className}
        id={id}
        {...props}
    >
        {children}
    </article>
);
Page.propTypes = {
    id: PropTypes.string,
    className: PropTypes.anyOf([
        PropTypes.string,
        PropTypes.arrayOf(
            PropTypes.string,
        ),
    ]),
    children: PropTypes.node.isRequired,
};
Page.defaultProps = {
    id: '',
    className: 'page',
};

export default Page;
