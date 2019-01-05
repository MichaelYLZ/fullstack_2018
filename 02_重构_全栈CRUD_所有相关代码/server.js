const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const filePath = path.resolve('dist');


const mongoose = require('mongoose');
const dataBase = 'mongodb://localhost:27017/fullstack01'
let SenteceModel = require('./SenteceModel.js');


mongoose.Promise = global.Promise;
mongoose.connect(dataBase, { useNewUrlParser: true }).then(
  () => {console.log('数据库连接成功') },
  err => { console.log('数据库没有连接成功'+ err)}
);
      
app.use(express.static(filePath))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 数据库中没有信息的话，自动加一个
SenteceModel.find((err, sens) => {
    if(err) throw err;
    
    if(!sens.length) {
        new SenteceModel({
                sentence:'欢迎编辑信息'
            }).save();
    };  
})


app.get('/api/sentences', (req, res) => {
    
    SenteceModel.find((err, sens) => {
        if(err) {
            throw err;
        } else {
            res.json(sens);
        }
    })
});

app.post('/api/sentences', (req, res) => {
    let sen = new SenteceModel(req.body);
    sen.save()
    .then(business => {
      res.status(200).json({message: '句子成功添加'});
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

app.put('/api/sentences', (req, res) => {
   
    SenteceModel.findById(req.body.id, (err,sen)=> {
        console.log(sen);
        
        if(!sen) {
            res.status(404).send('无此数据');
        } else {
            sen.sentence = req.body.sentence;
            sen.save().then(sen => {
                res.json(`更新成功。`);
            })
        }
    })
})

app.delete('/api/sentences', (req, res) => {
    
  SenteceModel.findByIdAndRemove({_id: req.body.id}, (err, sen) => {
      if (err) return res.status(500).send(err);
    
      const response = {
        message: "成功删除",
      };
    return res.status(200).send(response);
  });
    
});

app.listen(3000, ()=>console.log(`Visit On http://localhost:3000`));