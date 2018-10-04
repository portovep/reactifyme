import React from 'react';
import { storiesOf } from '@storybook/react';
import { RightColumnDecorator } from '../storybook/helpers/decorators';
import { fakeArticles } from '../data/fakeArticles';
import ArticlesPage from './ArticlesPage';
import { articles } from '../data/articles';

storiesOf('Pages', module)
  .addDecorator(RightColumnDecorator)
  .add('Articles Page', () => <ArticlesPage articles={articles} />);

storiesOf('Templates', module)
  .addDecorator(RightColumnDecorator)
  .add('Articles Page', () => <ArticlesPage articles={fakeArticles} />);
