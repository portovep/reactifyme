import React from 'react';
import { storiesOf } from '@storybook/react';
import { fakeProjects } from '../../../data/fakeProjects';
import { RightColumnDecorator } from '../../../storybook/helpers/decorators';
import { ProjectDetails } from './ProjectDetails';

storiesOf('Molecules/ProjectDetails', module)
  .addDecorator(RightColumnDecorator)
  .add('default', () => <ProjectDetails project={fakeProjects[0]} />);
