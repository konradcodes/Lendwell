import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import './simpleSwiperLibrary.scss';
import './simple-swiper.scss';

const SimpleSwiper = ({ children }) => {
  const params = {
    slidesPerView: 4,
    pagination: {
      el: '.swiper__pagination',
      type: 'bullets',
      clickable: true
    },
    spaceBetween: 10
  };
  return (
    <Swiper {...params}>
      <div className="swiper-container">
        <div className="swiper-wrapper">{children}</div>
      </div>
    </Swiper>
  );
};

SimpleSwiper.propTypes = {
  children: PropTypes.node.isRequired
};
export default SimpleSwiper;
