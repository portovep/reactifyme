import React from 'react';
import { storiesOf } from '@storybook/react';
import { fakeProjects } from '../../../data/fakeProjects';
import { ProjectHeader } from './ProjectHeader';

storiesOf('Project Header', module).add('default', () => (
  <ProjectHeader project={fakeProjects[0]} />
));
