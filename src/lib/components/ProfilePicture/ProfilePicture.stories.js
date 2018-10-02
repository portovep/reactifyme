import React from 'react';
import { storiesOf } from '@storybook/react';
import { LeftColumnDecorator } from '../../../storybook/helpers/decorators';
import { fakeProfilePicture } from '../../../data/fakeImages';
import { ProfilePicture } from './ProfilePicture';

storiesOf('Atoms/ProfilePicture', module)
  .addDecorator(LeftColumnDecorator)
  .add('default', () => <ProfilePicture picture={fakeProfilePicture} />);
