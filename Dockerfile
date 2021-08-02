FROM node:alpine as build 
COPY . .
RUN npm install
RUN npm run build


FROM nginx:alpine as base 
COPY nginx-config.conf /etc/nginx/templates/default.conf.template
COPY --from=build ./dist/index.html /data/www/portfolio/index.html
COPY --from=build ./dist/index-fr.html /data/www/portfolio/index-fr.html
COPY --from=build ./dist/assets /data/www/portfolio/assets
COPY ssl /etc/nginx/ssl
COPY certbot /var/www/certbot

EXPOSE 80 443