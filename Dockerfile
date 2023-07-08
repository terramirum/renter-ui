# Stage 1: Build the application
FROM node:14.17.6-alpine as build

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

# Stage 2: Serve the application using Nginx server
FROM nginx:alpine

COPY --from=build /app/dist/ /usr/share/nginx/html

EXPOSE 80