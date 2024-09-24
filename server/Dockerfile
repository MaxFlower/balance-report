# Use an official Node runtime as a parent image
FROM node:alpine

# Set the working directory in the container
WORKDIR /app/server

COPY ./server .

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 4000

# Command to run the app
CMD ["npm", "run", "dev"]
