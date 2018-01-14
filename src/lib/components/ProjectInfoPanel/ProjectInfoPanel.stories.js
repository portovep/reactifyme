import React from 'react';
import { storiesOf } from '@storybook/react';
import { fakeProjects } from '../../../data/fakeProjects';
import { RightColumnDecorator } from '../../../storybook/helpers/decorators';
import { ProjectInfoPanel } from './ProjectInfoPanel';

storiesOf('Project Information Panel', module)
  .addDecorator(RightColumnDecorator)
  .add('default', () => <ProjectInfoPanel project={fakeProjects[0]} />);
