let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sentece = new Schema(
    {
        sen: String
    }
);

module.exports = mongoose.model('Sentece02', Sentece);
