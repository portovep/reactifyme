import React from 'react';
import { storiesOf } from '@storybook/react';
import { RightColumnDecorator } from '../storybook/helpers/decorators';
import ExperimentsPage from './ExperimentsPage';
import { fakeExperiments } from '../data/fakeExperiments';

storiesOf('Pages', module)
  .addDecorator(RightColumnDecorator)
  .add('ExperimentsPage', () => (
    <ExperimentsPage experiments={fakeExperiments} />
  ));
