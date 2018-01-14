import React from 'react';
import { storiesOf } from '@storybook/react';
import { RightColumnDecorator } from '../storybook/helpers/decorators';
import ProjectsPage from './ProjectsPage';
import { fakeProjects } from '../data/fakeProjects';

storiesOf('Pages', module)
  .addDecorator(RightColumnDecorator)
  .add('Projects Page', () => <ProjectsPage projects={fakeProjects} />);
