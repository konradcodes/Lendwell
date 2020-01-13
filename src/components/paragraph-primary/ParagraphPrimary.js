import React from 'react';
import PropTypes from 'prop-types';
import './paragraph-primary.scss';
import '../../scss/variables.scss';

const ParagraphPrimary = ({
  text,
  fontSize,
  fontWeight,
  color,
  lineHeight,
  margin
}) => {
  const styles = {
    fontSize: `${fontSize}rem`,
    fontWeight,
    color,
    lineHeight,
    margin
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
