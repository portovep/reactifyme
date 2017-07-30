import React from 'react'
import {Helmet} from 'react-helmet';
import {ProfilePicture} from '../lib/components/index';
import {PersonalInfoPanel} from '../lib/components/index';
import {ContactDetails} from '../lib/components/index';
import {bio} from '../data/bio';
import {profilePicture} from '../data/images';
import {contactDetails} from '../data/contactDetails';
import {fakeHomePageMetadata} from '../data/fakeHomePageMetadata';

import './HomePage.css'

const PageMetadata =
  <Helmet>
    <title>{fakeHomePageMetadata.title}</title>
    <meta name="description"
          content={fakeHomePageMetadata.description} />
  </Helmet>;

const HomePage = () =>
  <div id="home"
       className="row homepage">
    {PageMetadata}
    <div className="col-md-4">
      <ProfilePicture picture={profilePicture} />
    </div>
    <div className="col-md-8 homepage__right-column">
      <PersonalInfoPanel bio={bio} />
      <ContactDetails contactDetails={contactDetails} />
    </div>
  </div>;

export default HomePage