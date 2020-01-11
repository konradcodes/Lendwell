import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import MainPage from '../../pages/MainPage';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;
