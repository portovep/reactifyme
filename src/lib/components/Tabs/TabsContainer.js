import React, { Component } from 'react';
import { Tabs } from './Tabs';

export class TabsContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { activeTabId: props.tabConfig[0].id };
    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(tabId) {
    this.setState({ activeTabId: tabId });
  }

  displayActiveTab(tabs) {
    const activeTab = tabs.find(tab => {
      return tab.props.id === this.state.activeTabId;
    });

    return <div>{activeTab}</div>;
  }

  render() {
    return (
      <Tabs
        handleTabChange={this.handleTabChange}
        activeTabId={this.state.activeTabId}
        tabConfig={this.props.tabConfig}
      >
        {this.displayActiveTab(this.props.children)}
      </Tabs>
    );
  }
}
