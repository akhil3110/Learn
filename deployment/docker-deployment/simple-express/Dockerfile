FROM node:20-alpine

WORKDIR /app

COPY package* .
COPY ./prisma .

RUN npm install --omit=optional

COPY . .

ENV DATABASE_URL=postgresql://postgres:mysecretpassword@localhost:5432/postgres
RUN echo $DATABASE_URL


RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "dev:docker"]