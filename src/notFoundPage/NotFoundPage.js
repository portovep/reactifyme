import React from 'react'
import {errorPageInfo} from '../data/errorPage';
import {Page} from '../lib/components/index'
import {fakeNotFoundPageMetadata} from '../data/fakeNotFoundPageMetadata';

const wrapperStyles = {
  marginTop: '7%'
};

const NotFoundPage = ({errorPageInfo}) =>
  <Page id="not-found-page"
        pageMetadata={fakeNotFoundPageMetadata}>
    <div className="col-md-8 col-md-offset-2"
         style={wrapperStyles}>
      <h1>{errorPageInfo.headerText}</h1>
      <p className="lead">
        {errorPageInfo.details}
      </p>
      <hr />
      <p>
        <a className="btn btn-success" href="/" role="button">
          <span className="glyphicon glyphicon-home"/>
          &nbsp;{errorPageInfo.buttonText}
        </a>
      </p>
    </div>
  </Page>;

NotFoundPage.defaultProps = {
  errorPageInfo
};

export default NotFoundPage;