import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, id }) => (
  <div className={className} id={id}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
