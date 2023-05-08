FROM node

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY ../my-project ./app

CMD ["yarn", "dev"]