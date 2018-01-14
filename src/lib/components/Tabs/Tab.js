import React from 'react';

export const Tab = ({ id, activeTabId, children }) => (
  <div
    role="tabpanel"
    className={id === activeTabId ? 'tab-pane active' : 'tab-pane'}
    id={id}
  >
    {children}
  </div>
);
