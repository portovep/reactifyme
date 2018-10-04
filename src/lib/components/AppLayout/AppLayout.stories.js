import React from 'react';
import { storiesOf } from '@storybook/react';
import { AppLayout } from './AppLayout';

storiesOf('Templates', module).add('App Layout', () => (
  <AppLayout>
    <div>
      <h1>This is a fake Page</h1>
      <p>With a fake description</p>
    </div>
  </AppLayout>
));
