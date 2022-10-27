FROM node:latest

WORKDIR /usr/app
COPY package.json ./
RUN npm install

COPY . .

EXPOSE 8087

CMD ["npm","start"]