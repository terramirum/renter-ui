# Stage 1: Build the application
FROM node:14 as builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular app
RUN npm run build --prod

# Stage 2: Serve the application using Nginx server
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the default Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default Nginx port (80)
EXPOSE 8001

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
