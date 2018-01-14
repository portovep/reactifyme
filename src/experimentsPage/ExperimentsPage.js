import React from 'react'
import {ProjectsList, Page} from "../lib/components/index";
import {fakeExperimentsPageMetadata} from '../data/fakeExperimentsPageMetadata';

const ExperimentsPage = ({experiments}) =>
  <Page id="experiments-page"
        pageMetadata={fakeExperimentsPageMetadata}>
    <ProjectsList projects={experiments}/>
  </Page>;

export default ExperimentsPage;