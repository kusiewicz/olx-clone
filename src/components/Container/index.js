import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, id, role, onClick }) => (
  <div className={className} id={id} role={role} onClick={onClick}>
    {children}
  </div>
);

Container.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Container;
