# Dockerfile for React client

# Build react client
FROM node:12-alpine

# Working directory be app
WORKDIR /user/src/app

COPY package*.json ./

###  Installing dependencies

RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]