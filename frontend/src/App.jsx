import React, { useState, useEffect } from 'react';
import './App.css';

export default function ReactExpressDemo() {
  const [message, setMessage] = useState('');
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });
  const [loading, setLoading] = useState(false);

  // TODO #9: Set the correct API base URL
  // HINT: Your Express server runs on port 3001
  const API_BASE = ''; // Complete this

  // TODO #10: Complete the fetchMessage function
  const fetchMessage = async () => {
    setLoading(true);
    try {
      // TODO: Make a GET request to /api/message endpoint
      // TODO: Parse the JSON response
      // TODO: Set the message state with the message from response
      
      setMessage('TODO: Replace with actual message from server');
    } catch (error) {
      console.error('Error fetching message:', error);
      setMessage('Error connecting to server');
    }
    setLoading(false);
  };

  // TODO #11: Complete the fetchUsers function
  const fetchUsers = async () => {
    setLoading(true);
    try {
      // TODO: Make a GET request to /api/users endpoint
      // TODO: Parse the JSON response
      // TODO: Set the users state with the data from response
      
      console.log('TODO: Fetch users from server');
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  // TODO #12: Complete the addUser function
  const addUser = async () => {
    if (!newUser.name || !newUser.email) return;

    setLoading(true);
    try {
      // TODO: Make a POST request to /api/users endpoint
      // TODO: Include Content-Type: application/json header
      // TODO: Send newUser data as JSON in request body
      // TODO: Parse the JSON response
      // TODO: Add the new user to the users state
      // TODO: Clear the newUser form (set to { name: '', email: '' })
      
      console.log('TODO: Add user to server', newUser);
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user. Check console for details.');
    }
    setLoading(false);
  };

  // TODO #13: Complete the useEffect to load initial data
  useEffect(() => {
    // TODO: Call fetchMessage and fetchUsers when component mounts
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
              * Complete the TODOs to make these API calls work!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}