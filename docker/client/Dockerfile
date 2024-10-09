FROM node:20-alpine

ARG DATABASE_URL

WORKDIR /usr/src/app

# Copy the necessary files from the correct locations
COPY ./packages /usr/src/app/packages
COPY ./apps/client /usr/src/app/apps/client
COPY package.json /usr/src/app/package.json  
COPY turbo.json /usr/src/app/turbo.json  

# Install dependencies
RUN yarn install

# Generate Prisma client
RUN cd packages/db && DATABASE_URL=$DATABASE_URL npx prisma generate

# Expose port for the client app
EXPOSE 3000

WORKDIR /usr/src/app/apps/client

# Build and start the client app
RUN yarn build 
CMD ["yarn", "start"]