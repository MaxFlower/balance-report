# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app/client

# Copy package.json and package-lock.json to the working directory
COPY ./client/package.json .

# Install app dependencies
RUN yarn

# Copy the rest of your application code to the working directory
COPY ./client .

# Expose a port to communicate with the React app
EXPOSE 5173

# Start your React app
CMD yarn dev