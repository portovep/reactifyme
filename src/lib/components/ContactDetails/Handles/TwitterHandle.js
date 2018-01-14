import React from 'react';
import { Handle } from './Handle';

const TWITTER_URL = 'https://twitter.com';

export const TwitterHandle = ({ handle }) => (
  <Handle href={`${TWITTER_URL}/${handle}`} fontId="fa-twitter-square" />
);
