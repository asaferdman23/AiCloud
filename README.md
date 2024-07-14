# AiChat

AiChat is a cutting-edge chat application that leverages artificial intelligence to provide an interactive and engaging user experience. This project is built using React for the frontend and Express.js for the backend, offering a seamless integration between the client and server-side operations.

## Technologies Used

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A modern frontend build tool that provides a faster and leaner development experience.
- **Dracula UI**: A dark theme UI library for React, used for styling the application.
- **React Router DOM**: For handling routing in the application.
- **React Awesome Button**: A React component library to add awesome buttons to your React project.
- **Sass**: A preprocessor scripting language that is interpreted or compiled into CSS.

### Backend

- **Express.js**: A web application framework for Node.js, designed for building web applications and APIs.
- **Cors**: A node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **@nlbridge/express**: A middleware for Express.js that facilitates the integration with NLBridge services.

### AI Integration

The backend integrates with OpenAI's GPT-3.5 Turbo model to provide intelligent and context-aware responses to user inputs, making the chat experience more engaging and realistic.

## Getting Started

To get started with AiChat, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and install the dependencies:

```sh
npm install

3.To start the development server for the frontend, run:
```sh
npm run dev

4.To start the backend server, navigate to the Backend directory and run:
node express.js

Ensure you have set up your OpenAI API key in the Backend/express.js file before starting the backend server.
Open your browser and navigate to http://localhost:3000 to see the application in action.