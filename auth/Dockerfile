FROM ubuntu:latest

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN apt-get update && apt-get install -y nodejs npm
RUN npm install express

COPY . .

COPY ./login.html /app/public

RUN node app.js &

EXPOSE 3000/tcp

# CMD ["node", "/app/app.js"]

