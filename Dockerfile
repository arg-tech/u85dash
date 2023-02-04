FROM php:8.0-apache

WORKDIR /var/www/html

COPY src/package.json .

RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm

RUN npm install

COPY ./src ./