// Import React Framework
import React from 'react';
import { storiesOf } from '@storybook/react';

// Import Custom Component
import HelloWorld from './index';

storiesOf('HelloWorld', module).add('HelloWorld', () => <HelloWorld />);
