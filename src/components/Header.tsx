import React from 'react';
import './Header.css'; // Assuming you have some styles for your header

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Telegram-style Header</h1>
      <div className="status-indicator">
        <span className="status-dot online"></span>
        <span className="status-text">Online</span>
      </div>
    </div>
  );
};

export default Header;