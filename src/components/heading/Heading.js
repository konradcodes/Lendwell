import React from 'react';
import PropTypes from 'prop-types';
import './heading.scss';

const Heading = ({ text }) => <h1 className="heading">{text}</h1>;

Heading.propTypes = {
  text: PropTypes.string
};

Heading.defaultProps = {
  text: ''
};
export default Heading;
