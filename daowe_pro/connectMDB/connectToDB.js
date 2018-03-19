const mg = require('mongoose');
mg.connect('mongodb://localhost:27017/daowei');
mg.connection.once('open',function(err){
    if(!err){
        console.log('数据库连接成功，目标数据库名->daowei')
    }
});