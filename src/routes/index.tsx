import React from 'react';

import User from './user';
import UserDetail from './user-detail';

import { IRoutesProps } from '../common/types';

const Routes: React.FC<IRoutesProps> = ({ match }) => (
  <>
    <User match={match} />
    <UserDetail match={match} />
  </>
);

export default Routes;
