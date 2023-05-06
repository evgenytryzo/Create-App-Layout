FROM node

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY .next ./.next
COPY pages ./pages
COPY public ./public
COPY styles ./styles

COPY next.config.js ./next.config.js

CMD ["yarn", "dev"]