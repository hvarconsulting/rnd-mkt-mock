import React from 'react';
import { headerStyle, logoStyle } from '../../styles/components';

const ChatHeader = ({ activePersona }) => {
    return (
        <div style={headerStyle(activePersona)}>
            <div style={{ display: "flex", alignItems: "center" }}>
                <span style={logoStyle(activePersona)}>{activePersona.icon}</span>
                <div>
                    <div style={{ fontWeight: "bold" }}>{activePersona.name}</div>
                    {activePersona.expertise && (
                        <div style={{ fontSize: "12px", opacity: "0.8" }}>Especialidade: {activePersona.expertise}</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;