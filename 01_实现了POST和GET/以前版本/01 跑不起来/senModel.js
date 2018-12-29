let mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sentece = new Schema(
    {
        sensReact: Array
    }
);

module.exports = mongoose.model('Sentece', Sentece);
