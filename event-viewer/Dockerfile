FROM node:10.8

ARG app_path=/usr/src/event-viewer

WORKDIR ${app_path}

COPY ./ ${app_path}/
RUN npm install --production

EXPOSE 3000
EXPOSE 27017