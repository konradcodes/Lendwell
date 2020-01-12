import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import './SimpleSwiper.scss';
import { Navigation, Pagination } from 'swiper/js/swiper.esm';

const SimpleSwiper = ({ children }) => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  };
  return <Swiper {...params}>{children}</Swiper>;
};

SimpleSwiper.propTypes = {
  children: PropTypes.node.isRequired
};
export default SimpleSwiper;
