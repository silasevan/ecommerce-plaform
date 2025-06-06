# Use official Node.js LTS image
FROM node:18-alpine3.20

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port (change if your API uses a different one)
EXPOSE 3000

# Start the API server
CMD [ "npm", "start" ]
