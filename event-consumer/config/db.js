'use strict';

const mongoose = require('mongoose');
const {MONGO_SERVER, MONGO_DATABASE} = process.env;
const config = {
    useNewUrlParser: true,
    reconnectTries: 30,
    reconnectInterval: 500
};

let connect = () => mongoose.connect(`mongodb://${MONGO_SERVER}/${MONGO_DATABASE}`, config);;

module.exports.connect = connect;