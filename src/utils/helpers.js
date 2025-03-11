/**
 * Gets the current timestamp in HH:MM format
 * @returns {string} Current time in HH:MM format
 */
export const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};

/**
 * Adds CSS keyframe animations to the document
 */
export const addAnimations = () => {
    // If we're in a browser environment and haven't added animations yet
    if (typeof document !== 'undefined' && !document.getElementById('hvar-animations')) {
        const style = document.createElement('style');
        style.id = 'hvar-animations';
        style.innerHTML = `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `;
        document.head.appendChild(style);
    }
};

/**
 * Detects keywords in text to identify the most relevant persona
 * @param {string} text - User input text
 * @returns {string} Persona identifier
 */
export const detectPersona = (text) => {
    const lowerText = text.toLowerCase();

    // Simple keyword matching - in a real app this would be more sophisticated
    if (lowerText.includes('sap') || lowerText.includes('hana') || lowerText.includes('ecc')) {
        return 'sap';
    } else if (lowerText.includes('chatbot') || lowerText.includes('call center') || lowerText.includes('atendimento')) {
        return 'conversational';
    } else if (lowerText.includes('ia') || lowerText.includes('inteligência artificial') ||
        lowerText.includes('generativa') || lowerText.includes('ml')) {
        return 'genai';
    } else if (lowerText.includes('dados') || lowerText.includes('data') ||
        lowerText.includes('lake') || lowerText.includes('integração')) {
        return 'datamod';
    }

    return 'general';
};