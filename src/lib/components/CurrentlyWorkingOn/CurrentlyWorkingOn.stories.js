import React from 'react';
import { storiesOf } from '@storybook/react';
import {RightColumnDecorator} from '../../../storybook/helpers/decorators';
import {fakeBio} from '../../../data/fakeBio';
import {CurrentlyWorkingOn} from './CurrentWorkingOn';


storiesOf('Currently Working On', module)
  .addDecorator(RightColumnDecorator)
  .add('default', () => (
    <CurrentlyWorkingOn description={fakeBio.currentlyWorkingOn.description}/>
  ));
