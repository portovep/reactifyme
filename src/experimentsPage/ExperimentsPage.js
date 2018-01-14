import React from 'react';
import { ProjectsList, Page } from '../lib/components/index';
import { experimentsPageMetadata } from '../data/experimentsPageMetadata';

const ExperimentsPage = ({ experiments }) => (
  <Page id="experiments-page" pageMetadata={experimentsPageMetadata}>
    <ProjectsList projects={experiments} />
  </Page>
);

export default ExperimentsPage;
