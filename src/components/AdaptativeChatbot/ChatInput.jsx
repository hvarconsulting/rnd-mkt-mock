import React from 'react';
import { inputAreaStyle, inputStyle, buttonStyle } from '../../styles/components';

const ChatInput = ({
    inputValue,
    setInputValue,
    handleUserInput,
    activePersona,
    autoplayComplete
}) => {
    return (
        <>
            <div style={inputAreaStyle}>
                <input
                    style={inputStyle(activePersona)}
                    placeholder="Digite sua mensagem..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleUserInput();
                        }
                    }}
                />
                <button
                    style={buttonStyle(activePersona)}
                    onClick={handleUserInput}
                >
                    ➤
                </button>
            </div>

            {!autoplayComplete && (
                <div style={{
                    padding: "10px",
                    textAlign: "center",
                    backgroundColor: "#f5f5f5",
                    borderTop: "1px solid #eee",
                    fontSize: "13px",
                    color: "#666"
                }}>
                    Digite qualquer mensagem e pressione Enter para avançar na demonstração
                </div>
            )}
        </>
    );
};

export default ChatInput;