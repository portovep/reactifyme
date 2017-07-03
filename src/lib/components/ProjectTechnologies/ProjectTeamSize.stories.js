import React from 'react';
import {storiesOf} from '@storybook/react';
import {ListDecorator} from '../../../storybook/helpers/decorators';
import {ProjectTechnologies} from './ProjectTechnologies';


storiesOf('Project Technologies', module)
  .addDecorator(ListDecorator)
  .add('with 2 team members', () => (
    <ProjectTechnologies technologies="React, Redux, Docker, another buzzword" />
  ));
