FROM node:12.14.1-alpine

WORKDIR /usr/opt/gsw-job

RUN npm i node-sass && \
    npm rebuild node-sass

EXPOSE 4200

ADD . /usr/opt/gsw-job

RUN npm i && \ 
    NODE_ENV="production" && \ 
    ./node_modules/.bin/react-scripts build

CMD node server.js