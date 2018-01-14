import React from 'react';
import { storiesOf } from '@storybook/react';
import { fakeContactDetails } from '../../../data/fakeContactDetails';
import { ContactDetails } from './ContactDetails';

storiesOf('Contact details', module).add('default', () => (
  <ContactDetails contactDetails={fakeContactDetails} />
));
