FROM node as build
WORKDIR /app
COPY . /app/
RUN npm install --legacy-peer-deps
COPY tsconfig.json /app/
RUN npm run build

FROM nginx:latest

RUN echo '\n\
server {\n\
  listen 80;\n\
\n\
  sendfile on;\n\
\n\
  default_type application/octet-stream;\n\
\n\
  gzip on;\n\
  gzip_http_version 1.1;\n\
  gzip_disable      "MSIE [1-6]\\.";\n\
  gzip_min_length   256;\n\
  gzip_vary         on;\n\
  gzip_proxied      expired no-cache no-store private auth;\n\
  gzip_types        text/plain text/css application/json application/javascript application/x-javascript text/xml application/xml application/xml+rss text/javascript;\n\
  gzip_comp_level   5;\n\
\n\
  root /usr/share/nginx/html;\n\
\n\
  location /front-end/ {\n\
    alias /usr/share/nginx/html/front-end/;\n\
    try_files $uri$args $uri$args/ $uri/ /front-end/index.html;\n\
  }\n\

  location / {\n\
    alias /usr/share/nginx/html/front-end/;\n\
    try_files $uri$args $uri$args/ $uri/ /front-end/index.html;\n\
  }\n\
}\n\
\n' > /etc/nginx/conf.d/default.conf

RUN rm -rf /usr/share/nginx/html/*

WORKDIR /usr/share/nginx/html

RUN mkdir front-end

COPY --from=build  app/dist/front-end front-end/

RUN ls -la

RUN chgrp -R 0 /usr/share/nginx && \
  chmod -R g=u /usr/share/nginx && \
  chgrp -R 0 /var/cache/nginx && \
  chmod -R g=u /var/cache/nginx && \
  chgrp -R 0 /var/run && \
  chmod -R g=u /var/run && \
  chmod -R 775 /usr/share/nginx/html

USER 1001

EXPOSE 80