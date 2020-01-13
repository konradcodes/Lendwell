import React from 'react';
import './gallery.scss';

// Components
import Wrapper from '../../components/wrapper/Wrapper';
import SimpleSwiper from '../../components/simple-swiper/SimpleSwiper';

const galleryContent = [
  { image: '../../assets/images/1-add-your-screenshot-here@2x.png' },
  { image: '../../assets/images/2-add-your-screenshot-here@2x.png' },
  { image: '../../assets/images/3-add-your-screenshot-here@2x.png' },
  { image: '../../assets/images/4-add-your-screenshot-here@2x.png' },
  { image: '../../assets/images/1-add-your-screenshot-here@2x.png' },
  { image: '../../assets/images/2-add-your-screenshot-here@2x.png' },
  { image: '../../assets/images/3-add-your-screenshot-here@2x.png' },
  { image: '../../assets/images/4-add-your-screenshot-here@2x.png' }
];

const Gallery = () => (
  <div className="gallery">
    <Wrapper>
      <SimpleSwiper>
        <div className="gallery__container">
          {galleryContent.map(item => (
            <div className="swiper-slide">
              <img
                src={item.image}
                className="gallery__image"
                alt="Application Screenshot"
              />
            </div>
          ))}
        </div>
      </SimpleSwiper>
    </Wrapper>
  </div>
);

export default Gallery;
