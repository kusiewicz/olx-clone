import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className }) => <i className={className} />;

Icon.propTypes = {
  className: PropTypes.string,
};

export default Icon;
