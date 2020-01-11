import React from 'react';
import PropTypes from 'prop-types';
import './paragraph-primary.scss';

const ParagraphPrimary = ({ text, fontSize }) => {
  const styles = {
    fontSize: `${fontSize}rem`
  };

  return (
    <p className="paragraph-primary" style={styles}>
      {text}
    </p>
  );
};
ParagraphPrimary.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number
};

ParagraphPrimary.defaultProps = {
  text: '',
  fontSize: 2.2
};
export default ParagraphPrimary;
