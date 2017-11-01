FROM node:alpine

ARG BUILDNUM="no_build_number"
RUN echo "Distelli Build Number: $BUILDNUM"

COPY server.js /app/server.js
COPY BUILD_NUMBER /app/BUILD_NUMBER
RUN cat /app/BUILD_NUMBER
ENTRYPOINT ["node","/app/server.js"]