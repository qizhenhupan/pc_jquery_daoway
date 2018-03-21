var express = require('express');
var router = express.Router();
var getCollectionConstructor = require('../connectMDB');
const Item = getCollectionConstructor('item');
const Shop = getCollectionConstructor('shop');
const Service = getCollectionConstructor('service');
const Comment = getCollectionConstructor('comment');
const City = getCollectionConstructor('city');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//请求数据的路由

Item.find({},function(err,docs){
    if(!docs.length){
        const items = require('../data/item');
        const shops = require('../data/shop');
        const services = require('../data/service');
        const comments = require('../data/comment');
        const cities = require('../data/city');
        Item.create(items,function(){});
        Shop.create(shops,function(){});
        Service.create(services,function(){});
        Comment.create(comments,function(err,docs){
            console.log('comments',docs.length);
        });

        City.create(cities,function(){})
    }
});
router.get('/getItem',function(req,res,next){
    Item.findOne({},function(err,docs){
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
        console.log('service',docs.length);
        res.json(docs)
    });
});
router.get('/getComment',function(req,res,next){
    const page = req.query.page || 1;
    const projection = null;
    const _filter = {
        limit:10,
        sort:'-createtime',
        //默认升序，用降序
        skip:(page-1)*10,
    };
    Comment.find({},projection,_filter,function(err,docs){
        res.json(docs)
    });
});
router.get('/getCity',function(req,res,next){
    City.find({},function(err,docs){
        if(!err){
            res.json(docs);
        }
    })
});
module.exports = router;
