import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw'; // <-- Add this
import { chatBodyStyle, getBotMessageStyle, userMessageStyle, timestampStyle } from '../../styles/components';
import personas from '../../data/personas';

const ChatArea = ({ messages, isTyping }) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    return (
        <div style={chatBodyStyle}>
            {/* Display initial bot greeting if no messages yet */}
            {messages.length === 0 && (
                <div style={getBotMessageStyle(personas.general)}>
                    Olá! Sou o assistente virtual da Hvar. Como posso ajudar sua empresa hoje?
                    <span style={timestampStyle}>agora</span>
                </div>
            )}

            {/* Display messages */}
            {messages.map((msg, index) => (
                <div
                    key={index}
                    style={{
                        ...(msg.sender === 'bot'
                            ? getBotMessageStyle(personas[msg.persona])
                            : userMessageStyle),
                        animation: "fadeIn 0.3s ease-in-out"
                    }}
                >
                    {/* 
                      1) Add remarkGfm and rehypeRaw to ReactMarkdown.
                      2) This allows HTML in your msg.text to render properly.
                    */}
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw]}
                    >
                        {msg.text}
                    </ReactMarkdown>
                    <span style={timestampStyle}>{msg.timestamp}</span>
                </div>
            ))}

            {/* Display typing indicator */}
            {isTyping && (
                <div
                    style={{
                        ...getBotMessageStyle(personas.general),
                        width: "60px",
                        animation: "fadeIn 0.3s ease-in-out"
                    }}
                >
                    <span>...</span>
                </div>
            )}

            {/* Add invisible div for scroll anchor */}
            <div ref={messagesEndRef} />
        </div>
    );
};

export default ChatArea;
