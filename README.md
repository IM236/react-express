# React + Express Lab Assignment

## Overview
In this lab, you will complete a React frontend that communicates with an Express.js backend. The project is partially built, but has missing pieces that you need to implement to make it functional.

## Learning Objectives
- Understand how React and Express work together
- Learn to create REST API endpoints
- Practice making HTTP requests from React
- Handle asynchronous operations and state management

## Project Structure
```
react-express-lab/
├── backend/
│   ├── server.js (INCOMPLETE)
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js (INCOMPLETE)
│   │   ├── App.css (PROVIDED)
│   │   └── index.js
│   └── package.json
└── README.md
```

## Setup Instructions

### 1. Initial Setup
```bash
# Clone or download the project
cd react-express-lab

# Setup backend
cd backend
npm install

# Setup frontend (in a new terminal)
cd frontend
npm install
```

### 2. Files to Create

#### backend/package.json
```json
{
  "name": "react-express-backend",
  "version": "1.0.0",
  "description": "Express backend for React lab",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

#### frontend/package.json (if not created by create-react-app)
```json
{
  "name": "frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
```

---

## Assignment Tasks

Complete the tasks in order. Test each task before moving to the next one.

### PART A: Complete the Express Backend (server.js)

#### Task 1: Add Middleware
**Location**: Top of server.js after `const PORT = ...`

Add the missing middleware:
```javascript
// Add express.json() middleware to parse JSON request bodies
// Add cors() middleware to allow requests from React app
```

**Test**: Server should start without errors when you run `npm run dev`

#### Task 2: Create GET /api/message Endpoint
**What it should do**: Return a JSON object with a message

**Expected Response**:
```json
{
  "message": "Hello from Express server!"
}
```

**Test**: Visit `http://localhost:3001/api/message` in your browser

#### Task 3: Create GET /api/users Endpoint
**What it should do**: Return the users array as JSON

**Expected Response**:
```json
[
  {"id": 1, "name": "John Doe", "email": "john@example.com"},
  {"id": 2, "name": "Jane Smith", "email": "jane@example.com"}
]
```

**Test**: Visit `http://localhost:3001/api/users` in your browser

#### Task 4: Create POST /api/users Endpoint
**What it should do**:
- Extract `name` and `email` from `req.body`
- Validate both fields are provided (return 400 error if not)
- Check if email already exists (return 409 error if it does)
- Create new user object with auto-incrementing ID
- Add to users array
- Return the new user with 201 status

**Test**: Use a tool like Postman or curl to POST data

#### Task 5: Add Error Handling
Add middleware to handle errors and 404 routes.

#### Task 6: Start the Server
Add the `app.listen()` call to start the server on the correct port.

**Test**: Server should start and display a message like "Server running on port 3001"

### PART B: Complete the React Frontend (App.js)

#### Task 7: Set API Base URL
**Location**: `const API_BASE = '';`

Set this to your Express server URL.

#### Task 8: Complete fetchMessage Function
**What it should do**:
- Make a GET request to `/api/message`
- Parse JSON response
- Update the message state

**Hint**: Use `fetch()` or `axios`

**Test**: Click "Fetch Message" button should display server message

#### Task 9: Complete fetchUsers Function
**What it should do**:
- Make a GET request to `/api/users`
- Parse JSON response  
- Update the users state

**Test**: Users should appear in the list on page load

#### Task 10: Complete addUser Function
**What it should do**:
- Make a POST request to `/api/users`
- Include proper headers (`Content-Type: application/json`)
- Send newUser data as JSON in body
- Update users state with new user
- Clear the form

**Test**: Fill out form and click "Add User" - new user should appear in list

#### Task 11: Add useEffect Hook
**What it should do**:
- Call `fetchMessage()` and `fetchUsers()` when component mounts

**Test**: Data should load automatically when page opens

---

## Testing Your Completed Application

### 1. Start Both Servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm start
```

### 2. Test Functionality
- ✅ Page loads and shows initial users
- ✅ "Fetch Message" button displays server message
- ✅ "Refresh" button reloads users
- ✅ Adding a new user works and updates the list
- ✅ Form clears after adding user
- ✅ Duplicate email validation works

### 3. Check Browser Console
- No JavaScript errors
- Network tab shows successful API calls

---

## Common Issues & Solutions

### Backend Issues
- **CORS Error**: Make sure you added `cors()` middleware
- **Cannot read property**: Check that `express.json()` middleware is added
- **404 on API calls**: Verify your route paths start with `/api/`

### Frontend Issues  
- **Nothing happens on button click**: Check browser console for errors
- **Network errors**: Make sure backend server is running on port 3001
- **Users not displaying**: Check that `fetchUsers()` is called in `useEffect`

### General Issues
- **Port conflicts**: Make sure ports 3000 and 3001 are available
- **Module not found**: Run `npm install` in both directories

---

## Bonus Challenges (Optional)

If you finish early, try these additional features:

1. **Delete User**: Add a delete button for each user
2. **Edit User**: Add ability to edit existing users
3. **Validation**: Add form validation on the frontend
4. **Loading States**: Improve loading indicators
5. **Error Handling**: Add better error messages for users

---

## Submission

When complete, your application should:
1. Start without errors
2. Display data from the server
3. Allow adding new users
4. Show proper error handling

Take a screenshot of your working application and submit your completed code files.

## Resources
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Fetch API Guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)