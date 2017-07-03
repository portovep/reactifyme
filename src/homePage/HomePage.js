import React from 'react'
import {fakeBio} from '../data/fakeBio';
import {fakeProfilePicture} from '../data/fakeImages';
import {fakeContactDetails} from '../data/fakeContactDetails';
import {ProfilePicture} from '../lib/components/index';
import {PersonalInfoPanel} from '../lib/components/index';
import {ContactDetails} from '../lib/components/index';

const HomePage = () =>
  <div id="home"
       className="row pv-main-column">
    <div className="col-md-4">
      <ProfilePicture picture={fakeProfilePicture} />
    </div>
    <div className="col-md-8 pv-content">
      <PersonalInfoPanel bio={fakeBio} />
      <ContactDetails contactDetails={fakeContactDetails} />
    </div>
  </div>;

export default HomePage