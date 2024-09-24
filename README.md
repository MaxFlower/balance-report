# SHOW ME THE MONEY

## Project structure
This project is structured as a monorepo with separate client and server directories for frontend and backend code, and a lib folder for reusable utilities, and constants.
```
.
├── client/             # Frontend application (e.g., React, Angular, etc.)
│   ├── public/         # Static files like images, icons, etc.
│   ├── src/            # Main frontend code
├── server/             # Backend application (Express)
├── lib/                # Shared logic, constants, and utilities
├── docker-compoese.yml # Compose file to run the project
└── README.md           # Project documentation
```

### Run server
```
cd server // from root
npm install
npm run dev
```
This will set up the server running on `http://localhost:4000`

### Run client app
```
cd client // from root
npm install
npm run dev
```
This will set up the server running on `http://localhost:3000` and connect the client app with the server

### TODO (what might be improved)
- it makes sense to go with Lerna or Turbo to set up monorepo design 
