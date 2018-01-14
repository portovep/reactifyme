import React from 'react';
import { Page } from '../lib/components/Page/Page';
import { articlesPageMetadata } from '../data/articlesPageMetadata';

const articleDetails = ({ id, title, url }) => (
  <li className="article-details" style={{ fontSize: '16px' }} key={id}>
    <a href={url}>{title}</a>
  </li>
);

export default ({ articles }) => (
  <Page id="articles-page" pageMetadata={articlesPageMetadata}>
    <div className="page-header">
      <h1>
        Articles <small>Some articles I wrote</small>
      </h1>
    </div>
    <div>
      <ul>
        {articles && articles.length ? articles.map(articleDetails) : null}
      </ul>
    </div>
  </Page>
);
