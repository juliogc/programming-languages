'use strict';

const mongoose = require('mongoose');

const Language = mongoose.model('Language', {
    name: String,
    wikipedia_url: String
});

module.exports = Language;