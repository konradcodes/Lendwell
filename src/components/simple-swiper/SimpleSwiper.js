import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import './simpleSwiperLibrary.scss';
import './simple-swiper.scss';

const SimpleSwiper = ({ children }) => {
  const params = {
    slidesPerView: 4,
    pagination: {
      el: '.swiper__pagination',
      type: 'bullets',
      clickable: true
    }
  };
  return <Swiper {...params}>{children}</Swiper>;
};

SimpleSwiper.propTypes = {
  children: PropTypes.node.isRequired
};
export default SimpleSwiper;
