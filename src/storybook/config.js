import { configure } from '@storybook/react';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import '../resources/css/custom.css';


const req = require.context('../../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);