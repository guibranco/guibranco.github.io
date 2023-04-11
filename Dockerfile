FROM php:8.1-apache-buster

RUN a2enmod rewrite

COPY ./ /var/www/html/