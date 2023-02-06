FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./login_page /app/public

EXPOSE 3000

CMD ["npm", "start"]

