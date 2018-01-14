import React from 'react';
import { Handle } from './Handle';

const GITHUB_RUL = 'https://github.com';

export const GithubHandle = ({ handle }) => (
  <Handle href={`${GITHUB_RUL}/${handle}`} fontId="fa-github-square" />
);
