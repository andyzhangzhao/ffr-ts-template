import React from 'react';
import { Route } from 'react-router-dom';
import { IRoutesProps } from '../../common/types';
import User from './User';

const UserRoutes: React.FC<IRoutesProps> = ({ match }) => {
  const matchedURL = match ? match.url : '';
  return (
    <>
      <Route path={`${matchedURL}/`} component={User} exact />
    </>
  );
};

export default UserRoutes;
