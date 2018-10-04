import React from 'react';
import { storiesOf } from '@storybook/react';
import { RightColumnDecorator } from '../storybook/helpers/decorators';
import ExperimentsPage from './ExperimentsPage';
import { fakeExperiments } from '../data/fakeExperiments';
import { experiments } from '../data/experiments';

storiesOf('Pages', module)
  .addDecorator(RightColumnDecorator)
  .add('Experiments Page', () => <ExperimentsPage experiments={experiments} />);

storiesOf('Templates', module)
  .addDecorator(RightColumnDecorator)
  .add('Experiments Page', () => (
    <ExperimentsPage experiments={fakeExperiments} />
  ));
