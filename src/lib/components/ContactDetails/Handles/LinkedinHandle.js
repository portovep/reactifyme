import React from 'react';
import {Handle} from './Handle';

const LINKEDIN_URL = 'https://linkedin.com/in';

export const LinkedinHandle = ({handle}) =>
    <Handle href={`${LINKEDIN_URL}/${handle}`}
            fontId="fa-linkedin-square" />;
