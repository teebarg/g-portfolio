FROM node:12.18.0-buster

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8000
