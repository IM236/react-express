// server.js - Express Backend (INCOMPLETE - Students need to complete this)
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// TODO #1: Add middleware for JSON parsing
// HINT: Use express.json() middleware

// TODO #2: Add CORS middleware to allow React app to connect
// HINT: Use cors() middleware with origin: 'http://localhost:3000'

// In-memory data store (in production, use a real database)
let users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

let nextUserId = 3;

// TODO #3: Create GET /api/message endpoint
// This should return a JSON object with a message property
// Example: { message: 'Hello from Express server!' }

// TODO #4: Create GET /api/users endpoint
// This should return the users array as JSON

// TODO #5: Create POST /api/users endpoint
// This should:
// - Get name and email from req.body
// - Validate that both name and email are provided (return 400 error if not)
// - Check if email already exists (return 409 error if it does)
// - Create new user with id: nextUserId++, name: name.trim(), email: email.trim().toLowerCase()
// - Add to users array
// - Return the new user with 201 status

// GET /api/users/:id - Get user by ID (COMPLETED - for reference)
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  
  res.json(user);
});

// TODO #6: Create error handling middleware
// This should catch any errors and return a 500 status with error message

// TODO #7: Create 404 handler for unknown routes
// This should return 404 status with error message

// TODO #8: Start the server
// Listen on PORT and log a message when server starts

module.exports = app;