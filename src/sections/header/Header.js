import React from 'react';
import './header.scss';

import Wrapper from '../../components/wrapper/Wrapper';

const Header = () => (
  <header className="header">
    <Wrapper>
      <div className="header__navigation-container">
        <div className="header__logo">Logo</div>
        <nav className="header__navigation">Navigation</nav>
      </div>
    </Wrapper>
  </header>
);

export default Header;
