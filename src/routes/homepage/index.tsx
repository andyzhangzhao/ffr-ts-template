import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';

export { HomePageModel } from './HomePageModel';
// export route config
export default () => <Route path="/home" component={HomePage} />;
