import React from 'react';
import { storiesOf } from '@storybook/react';
import { RightColumnDecorator } from '../storybook/helpers/decorators';
import { errorPageInfo } from '../data/errorPage';
import NotFoundPage from './NotFoundPage';

storiesOf('Pages', module)
  .addDecorator(RightColumnDecorator)
  .add('Not Found Page', () => <NotFoundPage errorPageInfo={errorPageInfo} />);
