import React from 'react';
import PropTypes from 'prop-types';
import './centered-container.scss';

const CenteredContainer = ({ children }) => (
  <div className="centeredContainer">{children}</div>
);

CenteredContainer.propTypes = {
  children: PropTypes.node.isRequired
};
export default CenteredContainer;
