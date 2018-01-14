import React from 'react';
import { storiesOf } from '@storybook/react';
import { fakeProjects } from '../../../data/fakeProjects';
import { RightColumnDecorator } from '../../../storybook/helpers/decorators';
import { ProjectImagesPanel } from './ProjectImagesPanel';

storiesOf('Project Images Panel', module)
  .addDecorator(RightColumnDecorator)
  .add('default', () => <ProjectImagesPanel project={fakeProjects[0]} />);
