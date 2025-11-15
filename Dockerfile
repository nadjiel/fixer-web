FROM node:20-slim AS builder

ARG VITE_API_URL
ARG BASE_URL=/

ENV VITE_API_URL=${VITE_API_URL}
ENV BASE_URL=${BASE_URL}

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --base "$BASE_URL"

FROM nginx:1.27-alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Add our custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
