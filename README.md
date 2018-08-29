# Programming Languages

## Stack
```text
.
|____MongoDB - NoSQL Database
|____RabbitMQ - AMQP Server
|____event-consumer - Consume events from RabbitMQ server and save it in MongoDB
|____event-viewer - REST API (GET only) to use stored data
```

## Dependencies
1. Docker
2. Docker Compose
3. NodeJS (v10.8 prefered)

## Running project
### Build custom images
```bash
$ {sudo} docker-compose build
```

### Start project
```bash
$ {sudo} docker-compose up
```

## event-publisher (Extra)
Created to quickly populate queue server and let us go straight to the point.

### Install dependencies
```bash
$ cd ./event-publisher
$ npm install --production
```

### Send batch of events to queue server
```bash
$ node ./sender.js
```

## Author
Júlio Gori Corradi <jgcorradi@gmail.com>