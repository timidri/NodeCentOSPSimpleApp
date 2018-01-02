FROM node:alpine
COPY server.js /app/server.js
ENTRYPOINT ["node","/app/server.js"]