FROM node:12.18.0-buster

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the Gatsby site
RUN npm run build

# Expose the port that the app runs on
EXPOSE 9000