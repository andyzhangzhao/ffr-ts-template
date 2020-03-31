import React from 'react';
import { Route } from 'react-router-dom';
import DetailPage from './DetailPage';

export { DetailModel } from './DetailModel';
export default () => <Route path="/detail" component={DetailPage} />;
