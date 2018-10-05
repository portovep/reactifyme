import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { ProjectTeamSize } from './ProjectTeamSize';
import centered from '@storybook/addon-centered';

storiesOf('Atoms/ProjectTeamSize', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('several members', () => {
    const label = 'Members';
    const defaultValue = 2;
    const options = {
      range: true,
      min: 1,
      max: 15,
      step: 1
    };
    const size = number(label, defaultValue, options);

    return <ProjectTeamSize size={size} />;
  })
  .add('with 2 team members', () => <ProjectTeamSize size={2} />)
  .add('with 4 team members', () => <ProjectTeamSize size={4} />)
  .add('with 5 team members', () => <ProjectTeamSize size={5} />)
  .add('with 20 team members', () => <ProjectTeamSize size={20} />);
