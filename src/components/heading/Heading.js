import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';
import '../../scss/variables.scss';

const Heading = ({ text, color }) => {
  const styles = {
    color
  };
  return (
    <h1 className="heading" style={styles}>
      {text}
    </h1>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
};

Heading.defaultProps = {
  text: '',
  color: '$color-dark-main'
};
export default Heading;
