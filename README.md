# Full-Stack Login Application

A complete login application with React frontend and Node.js/Express backend.

## Project Structure

```
login-app
├── backend
│   ├── package.json
│   └── server.js
└── frontend
    ├── package.json
    └── src
        ├── App.js
        ├── Login.js
        ├── Welcome.js
        ├── index.js
        ├── App.css
        ├── Login.css
        └── Welcome.css
```

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Start Backend Server

1. Navigate to the backend directory:
```bash
cd backend
```

2. Start the server:
```bash
npm start
```

The backend server will run on `http://localhost:5000`

### Start Frontend Development Server

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Use the following credentials to login:
   - Username: `admin`
   - Password: `admin`
3. After successful login, you'll be redirected to the welcome page
4. The username will be saved in localStorage for auto-fill on subsequent visits

## Features

- **Frontend (React)**
  - Functional components with React Hooks
  - Axios for API calls
  - React Router DOM for navigation
  - LocalStorage integration for username persistence
  - Professional UI with gradient backgrounds and smooth transitions

- **Backend (Node.js/Express)**
  - RESTful API endpoint
  - CORS enabled
  - JSON body parsing
  - Credential validation

## API Endpoints

### POST /login

**Request Body:**
```json
{
  "username": "admin",
  "password": "admin"
}
```

**Success Response (200):**
```json
{
  "message": "Login successful"
}
```

**Error Response (401):**
```json
{
  "message": "Invalid credentials"
}
```

## Development

### Backend Development

For development with auto-restart:
```bash
npm run dev
```

### Frontend Development

The React development server includes hot reloading by default.

## Technologies Used

- **Frontend:**
  - React 18
  - React Router DOM
  - Axios
  - CSS3

- **Backend:**
  - Node.js
  - Express.js
  - CORS

## License

ISC
