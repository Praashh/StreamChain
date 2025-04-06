FROM node:23-alpine

ARG DATABASE_URL
ARG REDIS_PASSWORD
ARG REDIS_HOST
ARG REDIS_PORT

RUN apk add --no-cache openssl libc6-compat

WORKDIR /usr/src/app

COPY ./packages /usr/src/app/packages
COPY ./apps/server /usr/src/app/apps/server
COPY package.json /usr/src/app/package.json  
COPY turbo.json /usr/src/app/turbo.json 

ENV REDIS_PASSWORD=${REDIS_PASSWORD}
ENV REDIS_HOST=${REDIS_HOST}
ENV REDIS_PORT=${REDIS_PORT}

RUN npm install

RUN cd packages/db && DATABASE_URL=$DATABASE_URL npx prisma generate

# Expose port for the client app
EXPOSE 3000

WORKDIR /usr/src/app/apps/server

# Build and start the client app
RUN yarn build

CMD ["yarn", "start"]