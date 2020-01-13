import React from 'react';
import './gallery.scss';

// Components
import Wrapper from '../../components/wrapper/Wrapper';
import SimpleSwiper from '../../components/simple-swiper/SimpleSwiper';
import Heading from '../../components/heading/Heading';
import CenteredContainer from '../../components/centered-container/CenteredContainer';
import ParagraphPrimary from '../../components/paragraph-primary/ParagraphPrimary';

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
      <div className="gallery__text-box">
        <Heading text="App Gallery" color="#ffffff" />
        <ParagraphPrimary
          text="Showcase your app screenshots into a nice carousel below. You can add as many screenshots as you want."
          fontWeight="normal"
          fontSize={1.9}
          color="#ffffff"
          margin="2.5rem 0 9rem 0"
        />
      </div>
      <SimpleSwiper>
        {galleryContent.map(item => (
          <div className="swiper-slide">
            <img
              src={item.image}
              className="gallery__image"
              alt="Application Screenshot"
            />
          </div>
        ))}
      </SimpleSwiper>
    </Wrapper>
  </div>
);

export default Gallery;
