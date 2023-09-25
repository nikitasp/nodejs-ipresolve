# Base image
FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

COPY .env.docker.local .env

CMD [ "node", "dist/main.js" ]

