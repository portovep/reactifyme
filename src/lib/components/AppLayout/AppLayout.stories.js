import React from 'react';
import { storiesOf } from '@storybook/react';
import { AppLayout } from './AppLayout';

storiesOf('Templates/AppLayout', module).add('default', () => (
  <AppLayout>
    <div>
      <h1>This is a fake Page</h1>
      <p>With a fake description</p>
    </div>
  </AppLayout>
));
