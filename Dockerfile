FROM php:8.2-apache

USER appuser

RUN a2enmod rewrite

COPY ./ /var/www/html/
