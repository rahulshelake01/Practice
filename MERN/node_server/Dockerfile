#Pulling Alpine os from docker hub
FROM node:alpine

RUN mkdir -p /src/project

COPY . /src/project

RUN node -v

RUN npm install
RUN npm install -g nodemon

EXPOSE 8090

WORKDIR /src/project

ENTRYPOINT ["nodemon", "app.js"]