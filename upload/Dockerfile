FROM ubuntu:latest

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN apt-get update && apt-get install -y nodejs npm
RUN npm install express mysql2

COPY . .

COPY ./upload.html /app/public

EXPOSE 5000/tcp

CMD ["node", "app.js", "&"]
