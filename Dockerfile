FROM php:8.5.3RC1-apache

USER appuser

RUN a2enmod rewrite

COPY ./ /var/www/html/
