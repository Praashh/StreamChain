FROM node:23-alpine

ARG DATABASE_URL
ARG REDIS_PASSWORD
ARG REDIS_HOST
ARG REDIS_PORT

RUN apk add --no-cache openssl libc6-compat

WORKDIR /usr/src/app

COPY ./packages /usr/src/app/packages
COPY ./apps/notification-services /usr/src/app/apps/notification-service
COPY package.json /usr/src/app/package.json  
COPY turbo.json /usr/src/app/turbo.json 

ENV REDIS_PASSWORD=${REDIS_PASSWORD}
ENV REDIS_HOST=${REDIS_HOST}
ENV REDIS_PORT=${REDIS_PORT}

RUN npm install

# Generate Prisma client
RUN cd packages/db && DATABASE_URL=$DATABASE_URL npx prisma generate

WORKDIR /usr/src/app/apps/notification-service

# Build and start the client app
RUN yarn build

CMD ["yarn", "start"]