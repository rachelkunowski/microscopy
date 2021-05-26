import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Classify from './pages/Classify';
import Instructions from './pages/Instructions';
import NotFound from './pages/NotFound';

export default ({ childProps }) =>
  <Switch>
    <Route path="/microscopy/classify" exact component={Classify} props={childProps} />
    <Route path="/microscopy" exact component={Instructions} props={childProps} />
    <Route path="/microscopy/about" exact component={About} props={childProps} />
    <Route component={NotFound} />
  </Switch>;
