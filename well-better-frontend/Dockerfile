# Stage 1: Build the Angular app
FROM node:23 AS builder

# Set a working directory in the container
WORKDIR /home/codespace

# Copy package.json and package-lock.json (or yarn.lock) to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular app's source code
COPY . .

# Build the Angular app for production
RUN npm run build --prod

# Stage 2: Serve the Angular app using Nginx
FROM nginx:stable-alpine

# Copy the Angular build output to the Nginx HTML directory
COPY --from=builder /app/dist/* /usr/share/nginx/html/

# Expose the default Nginx port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
