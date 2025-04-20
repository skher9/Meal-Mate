# 1. Use Node 20 (required for NestJS v11+)
FROM node:20-alpine

# 2. Set working directory
WORKDIR /app

# 3. Copy package files and install dependencies
COPY package*.json ./
RUN yarn install

# 4. Copy the rest of the application
COPY . .

# 5. Build the NestJS app
RUN yarn build

# 6. Start the app
CMD ["node", "dist/main"]
