import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import '../App.css';

const req = require.context('../../src', true, /\.stories\.js$/);

addDecorator(checkA11y);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
