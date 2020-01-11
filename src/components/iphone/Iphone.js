import React from 'react';
import './iphone.scss';

const Iphone = ({ version }) => {
  let iphone;
  switch (version) {
    case 'large':
      iphone = (
        <img
          className="iphone__large"
          src="../../assets/images/iPhone-Large@2x.png"
          alt="Large Iphone"
        />
      );
      break;
    case 'medium':
      iphone = (
        <img
          className="iphone__medium"
          src="../../assets/images/iPhone-Large@2x.png"
          alt="Medium Iphone"
        />
      );
      break;
    default:
      return null;
  }
  return iphone;
};
export default Iphone;
