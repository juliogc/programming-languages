'use strict';

const restful = require('node-restful');
const {mongoose} = restful;
const {MONGO_SERVER, MONGO_DATABASE} = process.env;
const config = {
    useMongoClient: true,
    reconnectTries: 30,
    reconnectInterval: 500
};

let connect = () => mongoose.connect(`mongodb://${MONGO_SERVER}/${MONGO_DATABASE}`, config);;

module.exports.connect = connect;