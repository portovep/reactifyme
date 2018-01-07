import React from 'react';
import {Page} from '../lib/components/Page/Page'

const pageMetadata = {
    title: "Articles page",
    description: "The articles page"
}

const articleDetails = ({id, title, url}) => 
    <li className="article-details" key={id}><a href={url}>{title}</a></li>

export default ({articles}) => 
    <Page id="articles-page"
          pageMetadata={pageMetadata}>
        <div>
            <p>This a list of articles I wrote:</p>
            <ul>
                { articles && articles.length ? articles.map(articleDetails) : null }
            </ul>
        </div>
    </Page>;