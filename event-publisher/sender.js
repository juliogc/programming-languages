'use strict';

const amqplib = require('amqplib');
const csvtojson = require('csvtojson');
const {join} = require('path');

const QUEUE = 'programming_languages';

(async amqplib => {
    let conn = await amqplib.connect('amqp://localhost');
    let channel = await conn.createChannel();

    await channel.assertQueue(QUEUE);

    let langs = await csvtojson().fromFile(join(__dirname, `programming-languages.csv`));
    langs.forEach(async lang => {
        let event = JSON.stringify(lang);
        await channel.sendToQueue(QUEUE, Buffer.from(event));
        console.log(`[event-sender] Message "${event}" sent to queue "${QUEUE}"`);
    });

    setTimeout(() => {
        conn.close();
        process.exit(0);
    }, 500);
})(amqplib);