import React from 'react';
import { mount } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  const page = mount(<App />);
  expect(page.html()).toMatchSnapshot();
});
