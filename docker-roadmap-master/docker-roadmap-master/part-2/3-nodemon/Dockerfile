FROM node:20 AS base
WORKDIR /usr/src/app
COPY package* .
RUN npm install
EXPOSE 3000


FROM base As development
COPY . .
CMD ["npm", "run", "dev"]




