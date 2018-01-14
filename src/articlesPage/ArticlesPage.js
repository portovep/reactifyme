import React from 'react';
import {Page} from '../lib/components/Page/Page'
import {fakeArticlesPageMetadata} from '../data/fakeArticlesPageMetadata'

const articleDetails = ({id, title, url}) => 
    <li className="article-details" key={id}><a href={url}>{title}</a></li>

export default ({articles}) => 
    <Page id="articles-page"
          pageMetadata={fakeArticlesPageMetadata}>
        <div className="page-header">
            <h1>Articles <small>Some articles I wrote</small></h1>
            <ul>
                { articles && articles.length ? articles.map(articleDetails) : null }
            </ul>
        </div>
    </Page>;