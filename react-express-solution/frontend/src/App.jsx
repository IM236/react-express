import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

export default function ReactExpressDemo() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  // API base URL (change this to your Express server URL)
  const API_BASE = 'http://localhost:3001/api';

  // For now, we'll use mock API calls (replace with real API calls later)
  const mockApiCall = (endpoint, options = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (endpoint === '/message') {
          resolve({ data: { message: 'Hello from Express server!' } });
        } else if (endpoint === '/users' && options.method === 'GET') {
          resolve({ 
            data: [
              { id: 1, name: 'John Doe', email: 'john@example.com' },
              { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
            ]
          });
        } else if (endpoint === '/users' && options.method === 'POST') {
          resolve({ 
            data: { 
              id: Date.now(), 
              name: options.body.name, 
              email: options.body.email 
            }
          });
        }
      }, 500);
    });
  };

  // Fetch message from server
  const fetchMessage = async () => {
  setLoading(true);
  try {
    const response = await fetch(`${API_BASE}/message`);
    const data = await response.json();
    setMessage(data.message);
  } catch (error) {
    console.error('Error fetching message:', error);
    setMessage('Error connecting to server');
  }
  setLoading(false);
};

const fetchUsers = async () => {
  setLoading(true);
  try {
    const response = await fetch(`${API_BASE}/users`);
    const data = await response.json();
    setUsers(data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
  setLoading(false);
};

const addUser = async () => {
  if (!newUser.name || !newUser.email) return;

  setLoading(true);
  try {
    const response = await fetch(`${API_BASE}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    setUsers([...users, data]);
    setNewUser({ name: '', email: '' });
  } catch (error) {
    console.error('Error adding user:', error);
  }
  setLoading(false);
};
  // Load initial data
  useEffect(() => {
    fetchMessage();
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="main-wrapper">
        <div className="main-card">
          <h1 className="main-title">
            React + Express Demo
          </h1>

          {/* Server Message Section */}
          <div className="message-section">
            <h2 className="section-title">
              Server Message
            </h2>
            <div className="message-controls">
              <button
                onClick={fetchMessage}
                disabled={loading}
                className="btn btn-primary"
              >
                {loading ? 'Loading...' : 'Fetch Message'}
              </button>
              <p className="message-text">
                {message || 'Click to fetch message from server'}
              </p>
            </div>
          </div>

          {/* Users Management Section */}
          <div className="users-section">
            <h2 className="section-title">
              Users Management
            </h2>
            
            {/* Add User Form */}
            <div className="form-container">
              <div className="form-grid">
                <input
                  type="text"
                  placeholder="Name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                  className="form-input"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({...newUser, email: e.target.value})}
                  className="form-input"
                />
                <button
                  onClick={addUser}
                  disabled={loading}
                  className="btn btn-success"
                >
                  Add User
                </button>
              </div>
            </div>

            {/* Users List */}
            <div className="users-list">
              <div className="users-header">
                <h3>Users List</h3>
                <button
                  onClick={fetchUsers}
                  disabled={loading}
                  className="btn btn-secondary"
                >
                  Refresh
                </button>
              </div>
              <div className="users-content">
                {users.length === 0 ? (
                  <div className="empty-state">
                    {loading ? 'Loading users...' : 'No users found'}
                  </div>
                ) : (
                  users.map((user) => (
                    <div key={user.id} className="user-item">
                      <div className="user-item-content">
                        <div className="user-info">
                          <h4>{user.name}</h4>
                          <p>{user.email}</p>
                        </div>
                        <span className="user-id">ID: {user.id}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* API Info Section */}
          <div className="api-info">
            <h3>API Endpoints (Express Server)</h3>
            <div className="endpoints-list">
              <div className="endpoint-item">
                <span className="method-badge method-get">GET</span>
                <code className="endpoint-path">/api/message</code>
                <span className="endpoint-description">- Get server message</span>
              </div>
              <div className="endpoint-item">
                <span className="method-badge method-get">GET</span>
                <code className="endpoint-path">/api/users</code>
                <span className="endpoint-description">- Get all users</span>
              </div>
              <div className="endpoint-item">
                <span className="method-badge method-post">POST</span>
                <code className="endpoint-path">/api/users</code>
                <span className="endpoint-description">- Create new user</span>
              </div>
            </div>
            <p className="api-note">
              * This demo simulates API calls. In a real app, these would connect to your Express server.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}