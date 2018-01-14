import React from 'react';

export const TabNavigation = ({ tabConfig, activeTabId, handleTabChange }) => {
  const tabs = tabConfig.map(tab => (
    <li
      key={tab.id}
      onClick={e => handleTabChange(tab.id)}
      className={tab.id === activeTabId ? 'active' : null}
    >
      <a href={tab.id}>{tab.label}</a>
    </li>
  ));

  return <ul className="nav nav-tabs">{tabs}</ul>;
};
