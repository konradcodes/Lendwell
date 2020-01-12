import React from 'react';
import './features.scss';

// Components
import Wrapper from '../../components/wrapper/Wrapper';
import CenteredContainer from '../../components/centered-container/CenteredContainer';
import IconTitle from '../../components/icon-title/IconTitle';

const content = [
  {
    icon: 'fa-crop',
    title: 'Clean and Responsive',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nibh orci.'
  },
  {
    icon: 'fa-cube',
    title: 'Retina Ready',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nibh orci.'
  },
  {
    icon: 'fa-magic',
    title: 'Build with Bootstrap',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nibh orci.'
  },
  {
    icon: 'fa-code-fork',
    title: 'Easy to Customize',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nibh orci.'
  },
  {
    icon: 'fa-rocket',
    title: 'Hundreds of Icons',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nibh orci.'
  },
  {
    icon: 'fa-database',
    title: 'Multiple Layout',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at nibh orci.'
  }
];

const items = content.map(item => (
  <IconTitle>
    <div className="iconTitle__item">
      <div className="iconTitle__icon-container">
        <img
          src={`../../assets/images/${item.icon}@2x.png`}
          className="iconTitle__icon"
          alt="Feature Icon"
        />
      </div>
      <h3 className="iconTitle__heading">{item.title}</h3>
      <p className="iconTitle__paragraph">{item.description}</p>
    </div>
  </IconTitle>
));

const Features = () => (
  <div className="features">
    <Wrapper>
      <CenteredContainer>
        <div className="iconTitle__container">{items}</div>
      </CenteredContainer>
    </Wrapper>
  </div>
);

export default Features;
