import React from 'react';
import './header.scss';

// Components
import Wrapper from '../../components/wrapper/Wrapper';
import Logo from '../../components/logo/Logo';
import Navigation from '../../components/navigation/Navigation';
import Iphone from '../../components/iphone/Iphone';
import Heading from '../../components/heading/Heading';
import ParagraphPrimary from '../../components/paragraph-primary/ParagraphPrimary';
import ButtonDownload from '../../components/button-download/ButtonDownload';

const Header = () => (
  <header className="header">
    <Wrapper>
      <div className="header__navigation-container">
        <div className="header__logo">
          <Logo />
        </div>
        <Navigation />
      </div>
      <div className="header__iphone-container">
        <Iphone version="large" />
        <span className="header__iphone-screenshot" />
      </div>
      <div className="header__main-content">
        <div className="header__text-box">
          <Heading
            text="Introducing lolite app landing template"
            color="#ffffff"
          />
          <ParagraphPrimary
            text="Iolite is great new responsive app landing page template for your awesome app. This is freebie from uimint.com & you will get useful resources from there."
            fontSize={2.2}
            color="#ffffff"
            lineHeight="1.5"
          />
          <ButtonDownload text="Download App" />
        </div>
      </div>
    </Wrapper>
  </header>
);

export default Header;
