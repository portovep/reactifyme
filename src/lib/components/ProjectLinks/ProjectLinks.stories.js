import React from 'react';
import {storiesOf} from '@storybook/react';
import {fakeLinks} from '../../../data/fakeProjects';
import {RightColumnDecorator} from '../../../storybook/helpers/decorators';
import {ProjectLinks} from './ProjectLinks';

storiesOf('Project Links', module)
  .addDecorator(RightColumnDecorator)
  .add('default', () => (
    <ProjectLinks links={fakeLinks}/>
  ));
