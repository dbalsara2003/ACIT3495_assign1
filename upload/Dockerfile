FROM node:14-alpine

WORKDIR /app


COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

COPY ./upload.html /app/public

EXPOSE 5000/tcp

#CMD ["node", "./app.js"]

