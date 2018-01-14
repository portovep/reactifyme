import React from 'react';

export const Handle = ({ href, fontId }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <i className={`fa ${fontId} fa-2x`} />
  </a>
);
