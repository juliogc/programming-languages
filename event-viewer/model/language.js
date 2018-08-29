'use strict';

const {model, mongoose} = require('node-restful');

let Language = model('Language', mongoose.Schema({
    name: String,
    wikipedia_url: String
})).methods(['get']);

module.exports = Language;