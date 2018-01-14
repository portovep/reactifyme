import React from 'react'
import {
  ProfilePicture, 
  PersonalInfoPanel, 
  ContactDetails, 
  Page
} from '../lib/components/index';
import {bio} from '../data/bio';
import {profilePicture} from '../data/images';
import {contactDetails} from '../data/contactDetails';
import {fakeHomePageMetadata} from '../data/fakeHomePageMetadata';

const HomePage = () =>
  <Page id="home"
        pageMetadata={fakeHomePageMetadata}
        classNames="homepage">
    <div className="col-md-4">
      <ProfilePicture picture={profilePicture} />
    </div>
    <div className="col-md-8 homepage__right-column">
      <PersonalInfoPanel bio={bio} />
      <ContactDetails contactDetails={contactDetails} />
    </div>
  </Page>;

export default HomePage