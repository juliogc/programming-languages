'use strict';

require('dotenv').config();
require('./config/db').connect();

const amqp = require('./config/amqp');
const consumer = require('./lib/consumer');

const quitSignals = ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGTERM'];
const {QUEUE_NAME} = process.env;

let closeConnection = async (signal) => {
    console.log(`[event-consumer] [${signal}] Received exit signal: Closing connection to amqp server`);
    let conn = await amqp.getConnect();
    conn.close();
    process.exit(0);
};

(async () => {
    let channel = await amqp.getChannel();
    await channel.assertQueue(QUEUE_NAME);
    channel.consume(QUEUE_NAME, consumer, { noAck : true });

    quitSignals.forEach(signal => {
        process.on(signal, closeConnection);
    });
})();