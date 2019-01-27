FROM node:11.4.0


RUN mkdir /usr/src/app
WORKDIR /usr/src/app

RUN npm install -g @angular/cli@7.1.4
RUN npm rebuild node-sass

COPY . /usr/src/app

CMD ng serve --host 0.0.0.0 --port 4200