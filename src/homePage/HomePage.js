import React from 'react';
import {
  ProfilePicture,
  PersonalInfoPanel,
  ContactDetails,
  Page
} from '../lib/components/index';
import { bio } from '../data/bio';
import { profilePicture } from '../data/images';
import { contactDetails } from '../data/contactDetails';
import { homePageMetadata } from '../data/homePageMetadata';

import './HomePage.css';

const HomePage = ({ profilePicture, bio, contactDetails }) => (
  <Page id="home" pageMetadata={homePageMetadata}>
    <div className="col-md-4 homepage__left-column">
      <ProfilePicture picture={profilePicture} />
    </div>
    <div className="col-md-8 homepage__right-column">
      <PersonalInfoPanel bio={bio} />
      <ContactDetails contactDetails={contactDetails} />
    </div>
  </Page>
);

HomePage.defaultProps = {
  profilePicture: profilePicture,
  bio: bio,
  contactDetails: contactDetails
};

export default HomePage;
