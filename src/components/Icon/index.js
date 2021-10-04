import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, onClick, datatestid }) => (
  <i className={className} onClick={onClick} data-testid={datatestid} />
);

Icon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  datatestid: PropTypes.string,
};

export default Icon;
