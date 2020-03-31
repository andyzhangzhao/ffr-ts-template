import React from 'react';
import HomePage, { HomePageModel } from './homepage';
import DetailPage, { DetailModel } from './detail';

const Routes = () => (
  <>
    <HomePage />
    <DetailPage />
  </>
);

const allModels = [HomePageModel, DetailModel];

export default Routes;
export { allModels };
