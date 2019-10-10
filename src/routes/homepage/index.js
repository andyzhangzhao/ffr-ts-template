// Import React Component
import React from 'react';
import { Route } from 'react-router-dom';

// Import Current Route
import HomePage from './HomePage';

// export route config
export default () => <Route path="/home" component={HomePage} />;
