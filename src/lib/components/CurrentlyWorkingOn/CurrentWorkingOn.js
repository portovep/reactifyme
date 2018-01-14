import React from 'react';
import { htmlForReact } from '../../helpers/helpers';

import './CurrentlyWorKingOn.css';

export const CurrentlyWorkingOn = ({ description }) => (
  <div
    className="text-muted currently-working-on"
    dangerouslySetInnerHTML={htmlForReact(description)}
  />
);
