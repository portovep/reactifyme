import React from 'react';
import { storiesOf } from '@storybook/react';
import { ArticleCard } from './ArticleCard';
import { articles } from '../../../data/articles';
import { MediumColumnDecorator } from '../../../storybook/helpers/decorators';

const exampleProps = {
  title: articles[0].title,
  description: 'A description for the article',
  imageLink:
    'https://insights-images.thoughtworks.com/phoenixserver01_0d6c7858197a30f0db1a59abbaa39119.png',
  link: articles[0].url
};

storiesOf('Molecules/ArticleCard', module)
  .addDecorator(MediumColumnDecorator)
  .add('default', () => <ArticleCard {...exampleProps} />);
