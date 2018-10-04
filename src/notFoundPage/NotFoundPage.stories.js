import React from 'react';
import { storiesOf } from '@storybook/react';
import { RightColumnDecorator } from '../storybook/helpers/decorators';
import { errorPageInfo } from '../data/errorPage';
import { fakeErrorPageInfo } from '../data/fakeErrorPage';
import NotFoundPage from './NotFoundPage';

storiesOf('Pages', module)
  .addDecorator(RightColumnDecorator)
  .add('Not Found Page', () => <NotFoundPage errorPageInfo={errorPageInfo} />);

storiesOf('Templates', module)
  .addDecorator(RightColumnDecorator)
  .add('Not Found Page', () => (
    <NotFoundPage errorPageInfo={fakeErrorPageInfo} />
  ));
