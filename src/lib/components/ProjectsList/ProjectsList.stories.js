import React from 'react';
import { storiesOf } from '@storybook/react';
import { fakeProjects } from '../../../data/fakeProjects';
import { RightColumnDecorator } from '../../../storybook/helpers/decorators';
import { ProjectsList } from './ProjectsList';

storiesOf('Project List', module)
  .addDecorator(RightColumnDecorator)
  .add('default', () => <ProjectsList projects={fakeProjects} />);
