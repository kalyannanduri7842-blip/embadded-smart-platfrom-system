# Multi-stage Dockerfile for SmartNest Embedded IoT Smart Home Platform
FROM node:20-alpine AS base

WORKDIR /app

# Install dependencies and build tools
COPY package*.json ./
RUN npm install --omit=dev || true

# Copy full source tree
COPY . .

# Run build verification
RUN npm run build

# Expose backend API (3000) and frontend UI (5000)
EXPOSE 3000 5000

ENV NODE_ENV=production
ENV PORT=3000

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:3000/api/health', (r) => process.exit(r.statusCode === 200 ? 0 : 1));"

CMD ["node", "index.js"]
