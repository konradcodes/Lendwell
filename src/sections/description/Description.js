import React from 'react';
import './description.scss';

// Components
import Wrapper from '../../components/wrapper/Wrapper';
import Iphone from '../../components/iphone/Iphone';
import Heading from '../../components/heading/Heading';
import ParagraphPrimary from '../../components/paragraph-primary/ParagraphPrimary';

const paragraphText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt efficitur vestibulum. Phasellus nisl leo, congue eu malesuada lobortis, fringilla et nulla. ';

const Description = () => (
  <div className="description">
    <Wrapper>
      <div className="introduction__main-content">
        <div className="introduction__iphone-container">
          <Iphone version="medium" />
          <span className="introduction__iphone-screenshot" />
        </div>
        <div className="introduction__text-box">
          <Heading text="Description First Layout" color="#585b60" />
          <ParagraphPrimary
            text={paragraphText}
            fontSize="1.7"
            color="#9da6ac"
            lineHeight="1.5"
            margin="3rem 0 9rem 0"
          />
        </div>
      </div>
    </Wrapper>
  </div>
);

export default Description;
