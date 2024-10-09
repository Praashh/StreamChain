FROM node:20-alpine

ARG DATABASE_URL

WORKDIR /usr/src/app

COPY ./packages /usr/src/app/packages
COPY ./apps/server /usr/src/app/apps/server
COPY package.json /usr/src/app/package.json  
COPY turbo.json /usr/src/app/turbo.json 

RUN npm install

# Generate Prisma client
RUN cd packages/db && DATABASE_URL=$DATABASE_URL npx prisma generate

# Expose port for the client app
EXPOSE 3001

WORKDIR /usr/src/app/apps/server

# Build and start the client app
RUN yarn build

CMD ["yarn", "start"]