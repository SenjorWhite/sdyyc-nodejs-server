FROM node:8-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --verbose

COPY . .

EXPOSE 3939
CMD [ "npm", "start" ]