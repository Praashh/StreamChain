FROM node:23-alpine

ARG DATABASE_URL

WORKDIR /usr/src/app

RUN apk add --no-cache python3 make g++ linux-headers eudev-dev

RUN apk add --no-cache openssl libc6-compat

# Copy the necessary files from the correct locations
COPY ./packages /usr/src/app/packages
COPY ./apps/client /usr/src/app/apps/client
COPY ./package.json /usr/src/app/package.json  
COPY ./turbo.json /usr/src/app/turbo.json  

# Install dependencies
RUN yarn install

# Generate Prisma client
RUN cd packages/db && DATABASE_URL=$DATABASE_URL npx prisma generate

# Expose port for the client app
EXPOSE 3002

WORKDIR /usr/src/app/apps/client

# Build and start the client app
RUN yarn build 
CMD ["yarn", "start"]