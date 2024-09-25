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


### Running steps

Run the following command in your command-line:

```
   docker-compose up -d --build
```
This will set up:
- the server running on `http://localhost:4000`
- xro docker image running on `http://localhost:3000`
- client app running on `http://localhost:5173`

### Run unit tests
```
cd server // from client or server folder
npm run test
```

### Code formatting with Prettier
```
// from root
npm run test
```

### TODO (what might be improved)
- it makes sense to go with Lerna or Turbo to set up monorepo design
- use ENV VARIABLES instead of hardcoded values
- increase test coverage
