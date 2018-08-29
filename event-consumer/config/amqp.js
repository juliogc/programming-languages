'use strict';

const amqplib = require('amqplib');

let connection;

let getConnection = async () => {
    connection = connection || (await amqplib.connect(`amqp://${process.env.QUEUE_SERVER}`));
    return connection;
};

let getChannel = async () => ((await getConnection()).createChannel());

module.exports.getConnect = getConnection;
module.exports.getChannel = getChannel;