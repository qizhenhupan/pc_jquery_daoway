var express = require('express');
var router = express.Router();
var getCollectionConstructor = require('../connectMDB');
const Item = getCollectionConstructor('item');
const Shop = getCollectionConstructor('shop');
const Service = getCollectionConstructor('service');
const Comment = getCollectionConstructor('comment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//请求数据的路由

router.get('/getItem',function(req,res,next){
  Item.find({},function(err,docs){
      res.json(docs)
  });
});
router.get('/getShop',function(req,res,next){
    Shop.find({},function(err,docs){
        if(!err){
            res.json(docs);
        }
    });
});
router.get('/getService',function(req,res,next){
    Service.find({},function(err,docs){
        res.json(docs)
    });
});
router.get('/getComment',function(req,res,next){
    Comment.find({},function(err,docs){
        res.json(docs)
    });
});

module.exports = router;
