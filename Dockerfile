FROM node:11.4.0


RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json /usr/src/app/package.json
RUN npm install
RUN npm install -g @angular/cli@7.1.4

COPY . /usr/src/app

CMD ng serve --host 0.0.0.0

