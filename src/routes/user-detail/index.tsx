import React from 'react';
import { Route } from 'react-router-dom';
import { IRoutesProps } from '../../common/types';
import UserDetail from './UserDetail';

const UserRoutes: React.FC<IRoutesProps> = ({ match }) => {
  const matchedURL = match ? match.url : '';
  return (
    <>
      <Route path={`${matchedURL}/user/:key`} component={UserDetail} exact />
    </>
  );
};

export default UserRoutes;
