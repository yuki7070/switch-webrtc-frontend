FROM node:lts-buster-slim

WORKDIR /app

COPY . ./

RUN yarn install

RUN yarn build

ENTRYPOINT ["yarn", "start"]