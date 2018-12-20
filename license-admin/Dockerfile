FROM nginx:1.15.6-alpine
RUN rm -rf /usr/share/nginx/html/*
CMD ["nginx", "-g", "daemon off;"]
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
COPY ./dist/license-admin /usr/share/nginx/html
COPY ./dist/license-admin-ro /usr/share/nginx/html/ro
