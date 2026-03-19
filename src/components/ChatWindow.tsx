import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow: React.FC = () => {
    return (
        <div className="chat-window">
            <Header />
            <MessageList />
            <MessageInput />
        </div>
    );
};

export default ChatWindow;