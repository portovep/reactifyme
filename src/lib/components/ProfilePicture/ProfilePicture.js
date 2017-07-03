import React from 'react';


export const ProfilePicture = ({picture}) =>
  <img id="pv-profile-img"
       src={picture.src}
       alt={picture.alt}
       className="img-responsive img-circle"/>;
