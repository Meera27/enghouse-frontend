
# Enghouse Interview Application

## Project Overview

This application was developed for the Enghouse interview process. It demonstrates a simple authentication system with role-based content access using React and Spring Boot.

## Features

- **User Authentication**: Simple username-based login system
- **Role-based Access**: Different views for different user roles
- **Questions and Answers System**: 
  - "enghouse" user can submit answers to predefined questions
  - "meera99" user can view questions and any submitted answers

## Tech Stack

### Frontend
- React
- React Router for navigation
- CSS for styling

### Backend
- Spring Boot
- REST API endpoints
- MySQL

## User Credentials

The application has two predefined users:
- Username: `enghouse` - Admin role with ability to answer questions
- Username: `meera99` - Regular user with ability to view questions and answers

## Application Structure

### Frontend Components
- **App.js**: Main application component with routing and authentication state
- **NavbarComponent**: Navigation header with conditional rendering based on auth state
- **LoginComponent**: Simple login form that validates credentials
- **HomeComponent**: Main content area that displays questions and answers

### Backend Components
- **QuestionsController**: REST endpoints for managing questions
- **QuestionsService**: Business logic for question operations
- **Questions**: Data model for questions and answers

## Getting Started

### Prerequisites
- Node.js and npm for frontend
- Java 8+ and Maven for backend

### Running the Application

1. **Start the Frontend**
   ```bash
   cd enghouse-frontend
   npm install
   npm start
   ```
   The application will open at http://localhost:3000

## Usage

1. Login with either "enghouse" or "meera99" username
2. As "enghouse":
   - View questions
   - Submit answers to questions
3. As "meera99":
   - View questions
   - Read answers (if available)

## API Endpoints

- `GET /all`: Retrieve all questions
- `POST /add`: Submit a new answer

## Development Notes

This application was created as part of the Enghouse interview process to demonstrate:
- React component design and state management
- Conditional rendering based on user roles
- Basic API interaction
- Simple authentication flow
- Form handling and validation

The focus was on creating a clean, functional UI that clearly demonstrates the required capabilities rather than implementing a production-ready authentication system.

## Future Enhancements

If this were to be developed further, potential improvements could include:
- Proper authentication with JWT tokens
- Password-based user authentication
- Persistent data storage with a database
- Enhanced UI with more interactive elements
- Testing suite for both frontend and backend components

```This project was created specifically for the Enghouse interview process and serves as a demonstration of React and Spring Boot development capabilities.```
