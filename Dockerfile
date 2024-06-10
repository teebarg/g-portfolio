FROM node:14

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build the Gatsby site
RUN npm run build

# Expose the port that the app runs on
EXPOSE 9000