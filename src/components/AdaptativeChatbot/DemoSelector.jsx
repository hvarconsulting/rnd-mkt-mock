import React from 'react';
import { demoSelectorStyle, demoButtonStyle } from '../../styles/components';

const DemoSelector = ({ showDemo, setShowDemo }) => {
    return (
        <div style={demoSelectorStyle}>
            <button
                style={demoButtonStyle(showDemo === 1)}
                onClick={() => setShowDemo(1)}
            >
                Demo 1: Integração SAP
            </button>
            <button
                style={demoButtonStyle(showDemo === 2)}
                onClick={() => setShowDemo(2)}
            >
                Demo 2: Atendimento ao Cliente
            </button>
            <button
                style={demoButtonStyle(showDemo === 3)}
                onClick={() => setShowDemo(3)}
            >
                Demo 3: IA Generativa
            </button>
        </div>
    );
};

export default DemoSelector;