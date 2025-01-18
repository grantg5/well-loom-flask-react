# Define node version
FROM node:22 as build
# Define container directory
WORKDIR /usr/src/app
# Copy package*.json for npm install
COPY package*.json ./
# Run npm clean install, including dev dependencies for @angular-devkit
RUN npm ci
# Run npm install @angular/cli
RUN npm install -g @angular/cli@18
# Copy all files
COPY . .
# Run ng build through npm to create dist folder
RUN npm run build --prod

# Define nginx for front-end server
FROM nginx:1.27.3-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy dist from ng build to nginx html folder
COPY --from=build /usr/src/app/dist/well-loom-frontend /usr/share/nginx/html
EXPOSE 80