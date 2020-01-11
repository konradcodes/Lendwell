import React from 'react';
import PropTypes from 'prop-types';
import './button-download.scss';

const ButtonDownload = ({ text }) => (
  <button type="button" className="buttonDownload">
    {text}
  </button>
);

ButtonDownload.propTypes = {
  text: PropTypes.string
};

ButtonDownload.defaultProps = {
  text: ''
};
export default ButtonDownload;
