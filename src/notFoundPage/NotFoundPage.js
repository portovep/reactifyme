import React from 'react'
import {Helmet} from 'react-helmet';
import {errorPageInfo} from '../data/errorPage';
import {fakeNotFoundPageMetadata} from '../data/fakeNotFoundPageMetadata';

const wrapperStyles = {
  marginTop: '7%'
};

const PageMetadata =
  <Helmet>
    <title>{fakeNotFoundPageMetadata.title}</title>
    <meta name="description"
          content={fakeNotFoundPageMetadata.description} />
  </Helmet>;

const NotFoundPage = ({errorPageInfo}) =>
  <div className="row not-found-page">
    {PageMetadata}
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
  </div>;

NotFoundPage.defaultProps = {
  errorPageInfo
};

export default NotFoundPage;