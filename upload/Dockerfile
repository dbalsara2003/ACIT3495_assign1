FROM ubuntu:latest

WORKDIR /app

COPY package*.json ./

RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    npm install

COPY . .

COPY upload.html /app/public/

EXPOSE 5000/tcp

CMD ["node", "app.js", "&"]
