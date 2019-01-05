let mongoose = require('mongoose');
const Schema = mongoose.Schema;
             
let Sentece = new Schema({
    sentence: String
});

module.exports = mongoose.model('Sentece03', Sentece);