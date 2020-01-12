import React from 'react';
import PropTypes from 'prop-types';
import './icon-title.scss';

const IconTitle = ({ children }) => <div className="iconTitle">{children}</div>;

IconTitle.propTypes = {
  children: PropTypes.node.isRequired
};

export default IconTitle;
