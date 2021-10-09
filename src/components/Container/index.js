import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, id, role }) => (
  <div className={className} id={id} role={role}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.node,
};

export default Container;
