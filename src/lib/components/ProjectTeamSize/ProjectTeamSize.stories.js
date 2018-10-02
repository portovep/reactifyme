import React from 'react';
import { storiesOf } from '@storybook/react';
import { ProjectTeamSize } from './ProjectTeamSize';
import { ListDecorator } from '../../../storybook/helpers/decorators';

storiesOf('Atoms/ProjectTeamSize', module)
  .addDecorator(ListDecorator)
  .add('with 2 team members', () => <ProjectTeamSize size={2} />)
  .add('with 4 team members', () => <ProjectTeamSize size={4} />)
  .add('with 5 team members', () => <ProjectTeamSize size={5} />)
  .add('with 20 team members', () => <ProjectTeamSize size={20} />);
