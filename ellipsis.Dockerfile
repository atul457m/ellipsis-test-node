FROM node:18

WORKDIR /var/www/

COPY . .

RUN npm i --production

CMD ["node", "server.js"]

EXPOSE 3000
