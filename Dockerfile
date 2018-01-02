FROM node:alpine
COPY server.js package.json /app/
WORKDIR /app/
RUN npm install
ENTRYPOINT ["node","/app/server.js"]