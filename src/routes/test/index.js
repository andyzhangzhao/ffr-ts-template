// Import React Component
import React from 'react';
import { Route } from 'react-router-dom';

// Import Current Route
import Test from './Test';

// export route config
export default () => <Route path="/test" component={Test} />;
