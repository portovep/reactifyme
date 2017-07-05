import React from 'react';
import {storiesOf} from '@storybook/react';
import {fakeLinks} from '../../../data/fakeProjects';
import {SmallColumnDecorator} from '../../../storybook/helpers/decorators';
import {ProjectLinks} from './ProjectLinks';

storiesOf('Project Links', module)
  .addDecorator(SmallColumnDecorator)
  .add('default', () => (
    <ProjectLinks links={fakeLinks}/>
  ));
