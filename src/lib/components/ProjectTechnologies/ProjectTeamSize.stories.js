import React from 'react';
import { storiesOf } from '@storybook/react';
import { ListDecorator } from '../../../storybook/helpers/decorators';
import { ProjectTechnologies } from './ProjectTechnologies';

storiesOf('Atoms/ProjectTechnologies', module)
  .addDecorator(ListDecorator)
  .add('default', () => (
    <ProjectTechnologies technologies="React, Redux, Docker, another buzzword" />
  ));
