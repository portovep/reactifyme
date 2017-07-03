import React from 'react';
import {TabNavigation} from './TabNavigation';

export const Tabs = ({tabConfig, activeTabId, handleTabChange, children}) =>
  <div>
    <TabNavigation tabConfig={tabConfig}
                   activeTabId={activeTabId}
                   handleTabChange={handleTabChange}/>
    <div className="pv-tab-content tab-content">
      {children}
    </div>
  </div>;