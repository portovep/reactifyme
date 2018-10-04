import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { fakeProjects } from '../../../data/fakeProjects';
import { ProjectHeader } from './ProjectHeader';

storiesOf('Atoms/ProjectHeader', module)
  .addDecorator(centered)
  .add('default', () => <ProjectHeader project={fakeProjects[0]} />);
