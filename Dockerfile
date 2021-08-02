FROM node:alpine as build 
COPY . .
RUN npm install
RUN npm run build


FROM nginx:alpine as base 
COPY nginx-config.conf.template /etc/nginx/templates/default.conf.template
COPY --from=build ./dist/index.html /data/www/portfolio/index.html
COPY --from=build ./dist/index-fr.html /data/www/portfolio/fr/index.html
COPY --from=build ./dist/assets /data/www/assets
COPY conf /etc/nginx/ssl
COPY data /var/www/certbot

EXPOSE 80 443