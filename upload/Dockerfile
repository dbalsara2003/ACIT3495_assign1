FROM ubuntu:latest

WORKDIR /app

COPY . .

RUN apt-get update && apt-get install -y nodejs npm
RUN npm install express mysql2

RUN mkdir public
RUN mv upload.html public/

EXPOSE 5000/tcp

CMD ["node", "app.js", "&"]
