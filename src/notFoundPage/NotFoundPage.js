import React from 'react';
import { errorPageInfo } from '../data/errorPage';
import { Page } from '../lib/components/index';
import { notFoundPageMetadata } from '../data/notFoundPageMetadata';

const NotFoundPage = ({ errorPageInfo }) => (
  <Page id="not-found-page" pageMetadata={notFoundPageMetadata}>
    <div className="col-md-12">
      <h1>{errorPageInfo.headerText}</h1>
      <p className="lead">{errorPageInfo.details}</p>
      <hr />
      <p>
        <a className="btn btn-success" href="/" role="button">
          <span className="glyphicon glyphicon-home" />
          &nbsp;{errorPageInfo.buttonText}
        </a>
      </p>
    </div>
  </Page>
);

NotFoundPage.defaultProps = {
  errorPageInfo
};

export default NotFoundPage;
