import React from 'react';
import './introduction.scss';

// Components
import Wrapper from '../../components/wrapper/Wrapper';
import Iphone from '../../components/iphone/Iphone';
import Heading from '../../components/heading/Heading';
import ParagraphPrimary from '../../components/paragraph-primary/ParagraphPrimary';

const paragraphText = (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer tincidunt
    efficitur vestibulum. Phasellus nisl leo, congue eu malesuada lobortis,
    fringilla et nulla. Curabitur posuere, sem nec bibendum finibus, erat turpis
    congue tellus, id sagittis eros purus quis odio. Etiam ut auctor mi. Nam
    enim augue, placerat ut pellentesque ac, dictum nec ligula. Maecenas
    venenatis nisi porta neque volutpat, nec vestibulum quam{' '}
    <span className="introduction__highlight">elementum.</span> Nunc blandit
    elit in pretium ultrices
    <br />
    <br />
    Cras dapibus accumsan ex a luctus. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas. Etiam maximus
    rhoncus orci, tempor mollis purus euismod sed. Proin aliquam nibh eros,
    iaculis accumsan dolor tempor ac. Proin commodo elementum magna at aliquam.
    Donec semper libero ut ipsum pharetra eleifend. Etiam rhoncus orci metus,
    eget pulvinar quam lobortis
  </p>
);

const Introduction = () => (
  <div className="introduction">
    <Wrapper>
      <div className="introduction__main-content">
        <div className="introduction__iphone-container">
          <Iphone version="medium" />
          <span className="introduction__iphone-screenshot" />
        </div>
        <div className="introduction__text-box">
          <Heading text="Description Third Layout" color="#585b60" />
          <ParagraphPrimary
            text={paragraphText}
            fontSize="1.7"
            color="#9da6ac"
            lineHeight="1.75"
            margin="2.5rem 0 3.5rem 0"
          />
        </div>
      </div>
    </Wrapper>
  </div>
);

export default Introduction;
