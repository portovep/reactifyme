import React from 'react';
import { storiesOf } from '@storybook/react';
import { RightColumnDecorator } from '../../../storybook/helpers/decorators';
import { fakeBio } from '../../../data/fakeBio';
import { PersonalInfoPanel } from './PersonalInfoPanel';

storiesOf('Organisms/PersonalInfoPanel', module)
  .addDecorator(RightColumnDecorator)
  .add('default', () => <PersonalInfoPanel bio={fakeBio} />);
