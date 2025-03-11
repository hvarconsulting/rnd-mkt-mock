import React, { useEffect } from 'react';
import AdaptativeChatbot from './components/AdaptativeChatbot';
import { addAnimations } from './utils/helpers';

function App() {
    // Add CSS animations when the app mounts
    useEffect(() => {
        addAnimations();
    }, []);

    return (
        <div className="App">
            <AdaptativeChatbot />
        </div>
    );
}

export default App;