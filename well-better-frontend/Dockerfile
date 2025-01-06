# Stage 1: Build the Angular app
FROM node:22 AS builder

RUN mkdir -p /app
WORKDIR /app
EXPOSE 4200

ENV PATH /app/node_modules/.bin:$PATH

COPY . /app

RUN npm install -g @angular/cli@18
# RUN npm rebuild node-sass

CMD ["npm", "run", "docker-start"]

# Build the Angular app for production
# RUN npm run build --prod

# Stage 2: Serve the Angular app using Nginx
# FROM nginx:stable-alpine

# Copy the Angular build output to the Nginx HTML directory
# COPY --from=builder ./dist/* /usr/share/nginx/html/

# Expose the default Nginx port
# EXPOSE 80

# Start Nginx server
# CMD ["nginx", "-g", "daemon off;"]
