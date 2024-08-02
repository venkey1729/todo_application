Base URL
Backend: https://venkat-todo-app.netlify.app/todos
Endpoints
1. User Authentication
Register a New User
Endpoint: POST /auth/register
Description: Registers a new user.
Request Body:
{
  "username": "venkat",
  "email": "venkat@example.com",
  "password": "venkat123"
}
Response:
201 Created:

{
  "message": "User registered successfully",
  "user": {
    "_id": "60d...6f7",
    "username": "venkat",
    "email": "venkat@example.com"
  }
}
400 Bad Request (if user already exists or validation fails):

{
  "message": "User already exists"
}
Login a User
Endpoint: POST /auth/login
Description: Logs in an existing user and returns a JWT token.
Request Body:
{
  "email": "venkat@example.com",
  "password": "venkat123"
}
Response:
200 OK:
{
  "token": "jwt-token-string"
}
401 Unauthorized (if credentials are incorrect):
{
  "message": "Invalid credentials"
}
Logout a User
Endpoint: POST /auth/logout
Description: Logs out the current user.
Request Body: None
Response:
200 OK:
{
  "message": "Logged out successfully"
}
3. To-Do Operations
Create a New To-Do
Endpoint: POST /todos
Description: Creates a new to-do item.
Request Body:
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Butter"
}
Response:
201 Created:
{
  "_id": "60d...6f8",
  "userId": "60d...6f7",
  "title": "Buy groceries",
  "description": "Milk, Bread, Butter",
  "completed": false
}
Get All To-Dos
Endpoint: GET /todos
Description: Retrieves all to-do items for the logged-in user.
Response:
200 OK:
[
  {
    "_id": "60d...6f8",
    "title": "Buy groceries",
    "description": "Milk, Bread, Butter",
    "completed": false
  },
  {
    "_id": "60d...6f9",
    "title": "Read a book",
    "description": "Finish 'The Hobbit'",
    "completed": true
  }
]
Get a To-Do by ID
Endpoint: GET /todos/:id
Description: Retrieves a single to-do item by its ID.
Response:
200 OK:
{
  "_id": "60d...6f8",
  "title": "Buy groceries",
  "description": "Milk, Bread, Butter",
  "completed": false
}
404 Not Found (if the item does not exist):
{
  "message": "Todo not found"
}
Update a To-Do
Endpoint: PUT /todos/:id
Description: Updates a to-do item.
Request Body:
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Butter, Eggs",
  "completed": true
}
Response:
200 OK:
{
  "_id": "60d...6f8",
  "title": "Buy groceries",
  "description": "Milk, Bread, Butter, Eggs",
  "completed": true
}
Delete a To-Do
Endpoint: DELETE /todos/:id
Description: Deletes a to-do item.
Response:
200 OK:

{
  "message": "Todo deleted successfully"
}
4. User Session
Get User Sessions
Endpoint: GET /sessions
Description: Retrieves all sessions for the logged-in user.
Response:
200 OK:
[
  {
    "_id": "60d...6fa",
    "loginTime": "2023-09-30T10:00:00Z",
    "ipAddress": "192.168.1.1"
  },
  {
    "_id": "60d...6fb",
    "loginTime": "2023-09-30T12:00:00Z",
    "ipAddress": "192.168.1.2"
  }
]
Deployment Documentation
Backend Deployment on Render
Create a New Web Service:

Go to Render's dashboard and click on "New Web Service".
Connect your GitHub repository containing the backend code.
Configuration:

Name: Set a name for your service.
Branch: Select the branch you want to deploy (e.g., main).
Build Command: Set this to npm install.
Start Command: Set this to node server.js.
Environment Variables:

Add the necessary environment variables, such as:
php

MONGO_URI=mongodb+srv://patamsettivenkat1729:venkat1729@cluster0.oopmhgl.mongodb.net/"
JWT_SECRET=2086a56eaa7c9cb0a9f5ca81cf8ff38fb875dcc78d91759ba21e99761a0f054d
Deploy:

Click on "Create Web Service" to deploy your application.
URL: After deployment, note the URL provided by Render. This will be used as the base URL for the frontend.
Auto-Deploys:

Enable auto-deploys to automatically deploy changes pushed to the connected branch.
Backend URL: https://your-backend.onrender.com

Frontend Deployment on Netlify
Create a New Site:

Go to Netlify's dashboard and click on "New site from Git".
Connect your GitHub repository containing the frontend code.
Configuration:

Build Command: Set this to npm run build.
Publish Directory: Set this to build.
Environment Variables:

Add environment variables needed by the frontend, such as:
arduino
Copy code
REACT_APP_API_URL=https://your-backend.onrender.com/api
Deploy:

Click on "Deploy site" to deploy your React application.
Redirect Configuration:

Create a netlify.toml file in the root of your project:
toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200



Frontend URL:https://venkat-todo-app.netlify.app/todos









