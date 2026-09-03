# Multi-stage production container for SmartNest IoT Platform
FROM node:20-alpine

WORKDIR /app

# Copy root manifests
COPY package.json ./
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Copy full application source code
COPY . .

EXPOSE 4005
EXPOSE 3005

ENV NODE_ENV=production
ENV BACKEND_PORT=4005
ENV FRONTEND_PORT=3005

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node index.js --health

CMD ["node", "index.js"]
