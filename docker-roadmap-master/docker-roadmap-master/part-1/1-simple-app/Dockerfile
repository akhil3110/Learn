FROM mhart/alpine-node

WORKDIR /usr/src/app

COPY package*  /usr/src/app

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]



