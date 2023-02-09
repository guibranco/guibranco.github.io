FROM php:8.1.15-apache-buster

RUN a2enmod rewrite

COPY ./ /var/www/html/