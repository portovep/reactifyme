import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { fakeContactDetails } from '../../../data/fakeContactDetails';
import { ContactDetails } from './ContactDetails';

storiesOf('Molecules/ContactDetails', module)
  .addDecorator(centered)
  .add('default', () => <ContactDetails contactDetails={fakeContactDetails} />);
