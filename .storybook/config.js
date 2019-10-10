// Import storybook
import { configure } from '@storybook/react';

const req = require.context('../src/components', true, /\.stories\.js$/);

// export configure
export default configure(() => {
  req.keys().forEach(filename => req(filename));
}, module);
