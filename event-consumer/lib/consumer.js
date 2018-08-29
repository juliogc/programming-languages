'use strict';

const Language = require('../model/language');

module.exports = async msg => {
    console.log(`[event-consumer] Message received: ${msg.content.toString()}`);

    try {
        let {name, wikipedia_url} = JSON.parse(msg.content.toString());
        if (!name || !wikipedia_url) {
            console.log('[event-consumer] Unable to save event, missing "name" or "wikipedia_url"');
            return;
        }

        const lang = new Language({name, wikipedia_url});
        await lang.save();
        console.log('[event-consumer] Event fully processed')
    } catch (err) {
        console.error(err);
    }
};