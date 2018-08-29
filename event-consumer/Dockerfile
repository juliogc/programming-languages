FROM node:10.8

ARG app_path=/usr/src/event-consumer

WORKDIR ${app_path}

COPY ./ ${app_path}/
RUN chmod 775 ./wait-for-it.sh
RUN npm install --production

EXPOSE 5672
EXPOSE 27017

# Start application
# CMD [ "./wait-for-it.js", "rabbitmq:5672", "--", "npm", "start" ]