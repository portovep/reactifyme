import React from 'react';
import { storiesOf } from '@storybook/react';
import { RightColumnDecorator } from '../storybook/helpers/decorators';
import HomePage from './HomePage';
import { fakeProfilePicture } from '../data/fakeImages';
import { fakeBio } from '../data/fakeBio';
import { fakeContactDetails } from '../data/fakeContactDetails';

storiesOf('Pages', module)
  .addDecorator(RightColumnDecorator)
  .add('Home Page', () => <HomePage />);

storiesOf('Templates', module)
  .addDecorator(RightColumnDecorator)
  .add('Home Page', () => (
    <HomePage
      profilePicture={fakeProfilePicture}
      bio={fakeBio}
      contactDetails={fakeContactDetails}
    />
  ));
