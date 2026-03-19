import React from 'react';
import './MessageList.css'; // Assuming you will add styles for message list

interface Message {
    id: number;
    text: string;
    sender: string;
    timestamp: string;
    isSent: boolean;
    avatar: string;
}

interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="message-list">
            {messages.map((message) => (
                <div key={message.id} className={`message ${message.isSent ? 'sent' : 'received'}`}>  
                    <img src={message.avatar} alt={`${message.sender}'s avatar`} className="avatar" />
                    <div className="message-content">
                        <div className="sender-name">{message.sender}</div>
                        <div className="timestamp">{new Date(message.timestamp).toLocaleString()}</div>
                        <div className="text">{message.text}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MessageList;