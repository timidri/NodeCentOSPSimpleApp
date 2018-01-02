FROM node:alpine
COPY server.js /app/server.js
RUN cat /app/BUILD_NUMBER
ENTRYPOINT ["node","/app/server.js"]