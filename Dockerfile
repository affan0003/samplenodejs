FROM node:14

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 8888

CMD ["node", "index.js"]
