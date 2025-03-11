import { useState, useEffect } from 'react';
import personas from '../data/personas';
import demoMessages from '../data/demoMessages';

const useChatbot = (initialDemoIndex = 0) => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [showDemo, setShowDemo] = useState(initialDemoIndex + 1);
    const [showRightColumn, setShowRightColumn] = useState(false);
    const [autoplayComplete, setAutoplayComplete] = useState(false);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [isProcessing, setIsProcessing] = useState(false); // Add this flag

    useEffect(() => {
        // Reset animation state when demo changes
        setMessages([]);
        setShowRightColumn(false);
        setAutoplayComplete(false);

        // Initialize with first bot message and set index to first user message (index 1)
        const initialBotMessage = demoMessages[showDemo - 1][0];
        setMessages([initialBotMessage]);
        setCurrentMessageIndex(1); // Start with the first user message
    }, [showDemo]);

    const handleUserInput = () => {
        // Return early if already processing a message
        if (isProcessing) return;

        if (inputValue.trim() === '' && currentMessageIndex >= demoMessages[showDemo - 1].length) {
            if (autoplayComplete) {
                setShowRightColumn(true);
            }
            return;
        }

        // Set processing flag
        setIsProcessing(true);

        // Start or continue the animation sequence
        if (currentMessageIndex < demoMessages[showDemo - 1].length) {
            // Get next predefined message (user message)
            const nextMessage = demoMessages[showDemo - 1][currentMessageIndex];

            // Add the predefined user message (not what the user actually typed)
            setMessages(prev => [...prev, nextMessage]);
            setInputValue(''); // Clear input field

            // Show typing indicator
            setIsTyping(true);

            // After a slight delay, add the bot response if available
            setTimeout(() => {
                setIsTyping(false);
                setIsProcessing(false);

                // Move to the next message index
                const nextIndex = currentMessageIndex + 1;
                setCurrentMessageIndex(nextIndex);

                // Check if there's a bot message next
                if (nextIndex < demoMessages[showDemo - 1].length &&
                    demoMessages[showDemo - 1][nextIndex].sender === 'bot') {
                    // Add the bot response
                    setMessages(prev => [...prev, demoMessages[showDemo - 1][nextIndex]]);
                    setCurrentMessageIndex(nextIndex + 1); // Move to the next message
                }

                // Check if we've reached the end of the conversation
                if (nextIndex >= demoMessages[showDemo - 1].length - 1) {
                    // Animation complete
                    setAutoplayComplete(true);
                }
            }, 1500);
        } else if (autoplayComplete) {
            setShowRightColumn(true);
        }
    };

    const getActivePersona = () => {
        if (messages.length === 0) return personas.general;

        // Encontra a última mensagem do bot para determinar a persona atual
        for (let i = messages.length - 1; i >= 0; i--) {
            if (messages[i].sender === 'bot') {
                return personas[messages[i].persona] || personas.general;
            }
        }
        return personas.general;
    };

    const activePersona = getActivePersona();

    return {
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
    };
};

export default useChatbot;