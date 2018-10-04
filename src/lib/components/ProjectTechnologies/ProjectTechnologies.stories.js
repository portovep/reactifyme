import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { ProjectTechnologies } from './ProjectTechnologies';

storiesOf('Atoms/ProjectTechnologies', module)
  .addDecorator(centered)
  .add('default', () => (
    <ProjectTechnologies technologies="React, Redux, Docker, another buzzword" />
  ));
