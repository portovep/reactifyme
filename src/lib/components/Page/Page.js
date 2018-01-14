import React from 'react';
import { Helmet } from 'react-helmet';

import './Page.css';

const pageMetadataBuilder = pageMetadata => (
  <Helmet>
    <title>{pageMetadata.title}</title>
    <meta name="description" content={pageMetadata.description} />
  </Helmet>
);

const Page = ({ id, pageMetadata, children }) => (
  <div id={id} className="row page">
    {pageMetadataBuilder(pageMetadata)}
    <div className="col-md-12">{children}</div>
  </div>
);

export { Page };
