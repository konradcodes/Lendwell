import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

const Navigation = () => (
  <nav className="navigation">
    <ul className="navigation__list">
      <Link to="#" className="navigation__item">
        Features
      </Link>
      <Link to="#" className="navigation__item">
        About
      </Link>
      <Link to="#" className="navigation__item">
        How it Works
      </Link>
      <Link to="#" className="navigation__item">
        Download
      </Link>
    </ul>
  </nav>
);

export default Navigation;
