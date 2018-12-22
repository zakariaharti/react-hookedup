import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
// @ts-ignore
const req = require.context('../stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach((filename: any) => req(filename));
}

configure(loadStories, module);
