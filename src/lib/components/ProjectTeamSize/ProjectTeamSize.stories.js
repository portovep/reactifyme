import React from 'react';
import {storiesOf} from '@storybook/react';
import {ProjectTeamSize} from './ProjectTeamSize';
import {ListDecorator} from '../../../storybook/helpers/decorators';


storiesOf('Project Team Size', module)
  .addDecorator(ListDecorator)
  .add('with 2 team members', () => (
    <ProjectTeamSize size={2} />
  ))
  .add('with 6 team members', () => (
    <ProjectTeamSize size={6} />
  ));
