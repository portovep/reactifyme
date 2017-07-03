import React from 'react';
import {LinkedinHandle} from './Handles/LinkedinHandle';
import {GithubHandle} from './Handles/GithubHandle';
import {TwitterHandle} from './Handles/TwitterHandle';
import {EmailHandle} from './Handles/EmailHandle';

const displayContactDetail = ({type, handle}) => {
  switch (type) {
    case 'linkedin':
      return <LinkedinHandle handle={handle} />;
    case 'github':
      return <GithubHandle handle={handle} />;
    case 'twitter':
      return <TwitterHandle handle={handle} />;
    case 'email':
      return <EmailHandle handle={handle} />;
    default:
      console.error(`Contact detail type not found: ${type}`)
  }
};

const ContactDetail = (contactDetail, idx) =>
  <li key={idx}>
    {displayContactDetail(contactDetail)}
  </li>;


export const ContactDetails = ({contactDetails}) =>
  <div id="pv-contact-details">
    <ul className="list-inline">
      {contactDetails.map(ContactDetail)}
    </ul>
  </div>;