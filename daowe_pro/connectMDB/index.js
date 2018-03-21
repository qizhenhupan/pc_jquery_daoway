require('./connectToDB');
const mg = require('mongoose');
const Schema = mg.Schema;

const CommentSchema = new Schema({
    "iconUrl":String,
    "area":String,
    "city":String,
    "comment":String,
    "createtime":Number,
    "nick":String,
    "star":Number
});
const ItemSchema = new Schema({
        "id":String,
        "title":String,
        "name":String,
        "desc":String,
        "price":Number,
        "oldPrice":Number,
        "orderCount":Number,
        "soldCount":Number,
        "commentCount":Number,
        "accept":String,
        "praise":String,
        "imgUrl":String,
        "company":String,
        "profile":String
    });
const ShopSchema = new Schema({
        "serviceIndex":String,
        "serviceType":Array,
        "shopList":Array
    });
const ServiceSchema = new Schema({
        "id":String,
        "title":String,
        "orderCount":Number,
        "positiveRate":String,
        "imgUrl":String
    });
const CitySchema = new Schema({
    name:String
});
//文档构造函数名 ， 文档约束， database中的集合名
mg.model('comment',CommentSchema,'comments');
mg.model('shop',ShopSchema,'shops');
mg.model('item',ItemSchema,'items');
mg.model('service',ServiceSchema,'services');
mg.model('city',CitySchema,'cities');
module.exports = function (collectionName) {
    return mg.model(collectionName)
};