FROM node:19.5.0-alpine
WORKDIR /app

COPY . .
RUN npm install
RUN npm run build
# Serve Application using Nginx Server
FROM nginx:alpine

COPY /dist/ /usr/share/nginx/html

EXPOSE 80