FROM node:20-slim AS builder

ARG VITE_API_URL
ARG VITE_BASE_URL=/

ENV VITE_API_URL=${VITE_API_URL}
ENV VITE_BASE_URL=${VITE_BASE_URL}

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build -- --base "$VITE_BASE_URL"

FROM nginx:1.27-alpine

ENV PORT=${PORT:-80}

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Add our custom config as a TEMPLATE (note the .template extension)
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE ${PORT}

CMD ["nginx", "-g", "daemon off;"]
