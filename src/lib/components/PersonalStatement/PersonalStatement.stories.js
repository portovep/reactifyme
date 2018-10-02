import React from 'react';
import { storiesOf } from '@storybook/react';
import { RightColumnDecorator } from '../../../storybook/helpers/decorators';
import { fakeBio } from '../../../data/fakeBio';
import { PersonalStatement } from './PersonalStatement';

storiesOf('Molecules/PersonalStatement', module)
  .addDecorator(RightColumnDecorator)
  .add('default', () => (
    <PersonalStatement
      title={fakeBio.personalStatement.title}
      statement={fakeBio.personalStatement.statement}
    />
  ));
