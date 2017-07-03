import React from 'react';
import { storiesOf } from '@storybook/react';
import {LeftColumnDecorator} from '../../../storybook/helpers/decorators';
import {Navigation} from './Navigation';

storiesOf('Navigation', module)
  .addDecorator(LeftColumnDecorator)
  .add('default', () => (
    <Navigation />
  ));
