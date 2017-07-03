import React from 'react';
import { storiesOf } from '@storybook/react';
import {RightColumnDecorator} from '../storybook/helpers/decorators';
import HomePage from './HomePage';

storiesOf('Pages', module)
  .addDecorator(RightColumnDecorator)
  .add('Home Page', () => (
    <HomePage />
  ));
