let mongoose = require('mongoose');
const Schema = mongoose.Schema;
             // 定义一个Schema
let Sentece = new Schema(
    {
        sen: {
            type: String,
            required: true
        }
    }
);
    // 基于定义好的Schema，生成一个Model
module.exports = mongoose.model('Sentece02', Sentece);
