import React from 'react';
import {TabNavigation} from './TabNavigation';

import './Tabs.css';

export const Tabs = ({tabConfig, activeTabId, handleTabChange, children}) =>
  <div>
    <TabNavigation tabConfig={tabConfig}
                   activeTabId={activeTabId}
                   handleTabChange={handleTabChange}/>
    <div className="tabs-container tab-content">
      {children}
    </div>
  </div>;