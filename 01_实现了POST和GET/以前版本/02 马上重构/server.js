const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const filePath = path.resolve('app');


const mongoose = require('mongoose');
const dataBase = 'mongodb://localhost:27017/myapp'
let SenModel = require('./senModel.js');


mongoose.Promise = global.Promise;
mongoose.connect(dataBase, { useNewUrlParser: true }).then(
  () => {console.log('数据库连接成功') },
  err => { console.log('数据库没有连接成功'+ err)}
);
      
app.use(express.static(filePath))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/sens', (req, res) => {
    SenModel.find((err, sens) => {
        if(err) {
            console.log(err);
        } else {
            res.json(sens)
            // YES
        }
    })
})

app.post('/api/sens', (req, res) => {
    let sen = new SenModel(req.body);
    sen.save()
    .then(business => {
      res.status(200).json({message: '句子成功添加'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});



app.listen(3000, ()=>console.log(`Visit On localHost3000`));