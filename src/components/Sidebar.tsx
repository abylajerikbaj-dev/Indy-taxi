import React from 'react';
import './Sidebar.css';

interface User {
  id: number;
  name: string;
  avatar: string;
  isOnline: boolean;
}

const users: User[] = [
  { id: 1, name: 'Alice', avatar: 'https://example.com/alice.jpg', isOnline: true },
  { id: 2, name: 'Bob', avatar: 'https://example.com/bob.jpg', isOnline: false },
  { id: 3, name: 'Charlie', avatar: 'https://example.com/charlie.jpg', isOnline: true },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id} className={user.isOnline ? 'online' : 'offline'}>
            <img src={user.avatar} alt={`${user.name}'s avatar`} />
            <span>{user.name}</span>
            <span className="status-indicator"></span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;