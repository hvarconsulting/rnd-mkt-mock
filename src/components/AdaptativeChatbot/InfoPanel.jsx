import React, { useState } from 'react';
import TabNavigation from '../ui/TabNavigation';
import HighlightBox from '../ui/HighlightBox';
import ConceptTab from '../InfoTabs/ConceptTab';
import FeaturesTab from '../InfoTabs/FeaturesTab';
import BenefitsTab from '../InfoTabs/BenefitsTab';
import TechTab from '../InfoTabs/TechTab';
import { rightColumnStyle } from '../../styles/components';
import demoDescriptions from '../../data/demoDescriptions';

const InfoPanel = ({ showDemo }) => {
    const [activeTab, setActiveTab] = useState('concept');

    const tabs = [
        { id: 'concept', label: 'Conceito' },
        { id: 'features', label: 'Funcionalidades' },
        { id: 'benefits', label: 'Benefícios' },
        { id: 'tech', label: 'Tecnologia' }
    ];

    const renderTabContent = () => {
        switch (activeTab) {
            case 'concept':
                return <ConceptTab />;
            case 'features':
                return <FeaturesTab />;
            case 'benefits':
                return <BenefitsTab />;
            case 'tech':
                return <TechTab />;
            default:
                return <ConceptTab />;
        }
    };

    return (
        <div style={{
            ...rightColumnStyle,
            animation: "fadeInRight 0.5s ease-in-out"
        }}>
            <HighlightBox
                title={demoDescriptions[showDemo].title}
                description={demoDescriptions[showDemo].description}
                keyPoint={demoDescriptions[showDemo].key}
                animation="fadeIn 0.5s ease-in-out"
            />

            <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabs={tabs}
            />

            {renderTabContent()}
        </div>
    );
};

export default InfoPanel;