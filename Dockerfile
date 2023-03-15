FROM node:18.15-alpine

WORKDIR /usr/src/app

COPY package-lock.json ./

COPY package.json ./

RUN npm install

COPY . .

ARG node_env=development

ENV NODE_ENV $node_env

RUN npm run build

CMD ["npm", "run", "serve:optimized"]