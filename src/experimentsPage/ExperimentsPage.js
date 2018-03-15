import React from 'react';
import { ProjectsList, Page } from '../lib/components/index';
import { experimentsPageMetadata } from '../data/experimentsPageMetadata';

const ExperimentsPage = ({ experiments }) => (
  <Page id="experiments-page" pageMetadata={experimentsPageMetadata}>
    <div className="col-md-12">
      <ProjectsList projects={experiments} />
    </div>
  </Page>
);

export default ExperimentsPage;
