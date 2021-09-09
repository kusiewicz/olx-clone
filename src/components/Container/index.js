import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children, className, id }) => (
  // const classProps = classnames(flex && 'flex', rel && 'rel', cntr && 'cntr', {
  //   ...restProps.value,
  // });

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
