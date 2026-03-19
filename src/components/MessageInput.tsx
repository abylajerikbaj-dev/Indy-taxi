import React, { useState } from 'react';

const MessageInput = ({ onSend }) => {
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSend = () => {
        if (message.trim()) {
            onSend(message);
            setMessage(''); // Clear input after sending
        }
    };

    return (
        <div>
            <input
                type="text"
                value={message}
                onChange={handleInputChange}
                placeholder="Type your message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default MessageInput;