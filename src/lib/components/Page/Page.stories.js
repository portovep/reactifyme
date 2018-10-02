import React from 'react';
import { storiesOf } from '@storybook/react';
import { RightColumnDecorator } from '../../../storybook/helpers/decorators';
import { Page } from './Page';

const pageMetadata = {
  title: 'Test Page',
  description: 'This is a test page'
};

storiesOf('Organisms/Page', module)
  .addDecorator(RightColumnDecorator)
  .add('default', () => (
    <Page id="test-page" pageMetadata={pageMetadata}>
      <div>
        <p>This is the content of a fake page</p>
      </div>
    </Page>
  ));
