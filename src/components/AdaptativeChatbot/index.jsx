import React from 'react';
import ChatHeader from './ChatHeader';
import ChatArea from './ChatArea';
import ChatInput from './ChatInput';
import DemoSelector from './DemoSelector';
import InfoPanel from './InfoPanel';
import useChatbot from '../../hooks/useChatbot';
import { containerStyle, layoutStyle, leftColumnStyle } from '../../styles/components';

const AdaptativeChatbot = () => {
    const {
        messages,
        inputValue,
        setInputValue,
        isTyping,
        showDemo,
        setShowDemo,
        showRightColumn,
        autoplayComplete,
        activePersona,
        handleUserInput
    } = useChatbot();

    return (
        <div style={{
            padding: "20px",
            backgroundColor: "#fafafa",
            minHeight: "100vh",
            fontFamily: "'Inter', sans-serif"
        }}>
            <h1 style={{ textAlign: "center", marginBottom: "10px", color: "#333" }}>
                Assistente Inteligente Hvar - Transição Transparente
            </h1>
            <p style={{
                textAlign: "center",
                color: "#666",
                marginBottom: "30px",
                maxWidth: "800px",
                margin: "0 auto 30px"
            }}>
                Demonstração interativa de um chatbot que identifica automaticamente a especialidade necessária
                e adapta a conversa de forma transparente, sem interromper o fluxo do usuário
            </p>

            <DemoSelector showDemo={showDemo} setShowDemo={setShowDemo} />

            <div style={{
                ...layoutStyle,
                flexDirection: showRightColumn ? "row" : "column",
                alignItems: showRightColumn ? "flex-start" : "center"
            }}>
                <div style={{
                    ...leftColumnStyle,
                    width: showRightColumn ? "380px" : "400px",
                    margin: showRightColumn ? "0" : "0 auto"
                }}>
                    <div style={{
                        ...containerStyle(activePersona),
                        margin: showRightColumn ? "0" : "0 auto",
                        height: showRightColumn ? "100%" : "750px",
                    }}>
                        <ChatHeader activePersona={activePersona} />
                        <ChatArea messages={messages} isTyping={isTyping} />
                        <ChatInput
                            inputValue={inputValue}
                            setInputValue={setInputValue}
                            handleUserInput={handleUserInput}
                            activePersona={activePersona}
                            autoplayComplete={autoplayComplete}
                        />
                    </div>
                </div>

                {showRightColumn && <InfoPanel showDemo={showDemo} />}
            </div>
        </div>
    );
};

export default AdaptativeChatbot;