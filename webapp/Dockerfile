# Step 1: Build with Node + Alpine
FROM node:18-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN apk add --no-cache python3 make g++ \
  && npm install \
  && apk del python3 make g++
COPY . .
RUN npm run build

# Step 2: Serve with Nginx Alpine
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
