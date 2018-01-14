import React from 'react';

import './ProfilePicture.css';

export const ProfilePicture = ({ picture }) => (
  <img
    src={picture.src}
    alt={picture.alt}
    className="img-responsive img-circle profile-picture"
  />
);
