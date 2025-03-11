import React from 'react';
import { tabsStyle, tabStyle } from '../../styles/components';

const TabNavigation = ({ activeTab, setActiveTab, tabs }) => {
    return (
        <div style={tabsStyle}>
            {tabs.map((tab) => (
                <div
                    key={tab.id}
                    style={tabStyle(activeTab === tab.id)}
                    onClick={() => setActiveTab(tab.id)}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    );
};

export default TabNavigation;