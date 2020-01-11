import React from 'react';
import { render } from 'react-dom';
import Router from './components/router/Router';
import './scss/main.scss';

render(<Router />, document.querySelector('#root'));
