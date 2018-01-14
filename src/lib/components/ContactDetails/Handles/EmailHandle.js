import React from 'react';
import { Handle } from './Handle';

const EMAIL_URL = 'mailto:';

export const EmailHandle = ({ handle }) => (
  <Handle href={`${EMAIL_URL}/${handle}`} fontId="fa-envelope-square" />
);
