FROM node:20 AS base
WORKDIR /usr/src/app
COPY package* .
RUN npm install
EXPOSE 3000

FROM base AS development
COPY . .
CMD ["npm", "run", "dev"]

FROM base AS production
COPY . .
RUN npm prune --production
CMD ["npm", "run", "start"]


