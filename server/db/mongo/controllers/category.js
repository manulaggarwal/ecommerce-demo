import Category from '../models/category';
import Product from '../models/products';

export function categories(req, res, next) {
    Category.find({},{"categoryName": 1}).exec((err, categories)=>{
        if(err) return res.sendStatus(409)
        return res.send(categories);
    })
}

export function getCategoryWithProducts(req, res, next) {
    Category.findOne({"_id":req.params.id}).populate("products").exec((err, category)=>{
        if(err) return res.sendStatus(404)
        return res.send(category);
    })
}

export function getProduct(req, res, next) {
    Product.findOne({"_id":req.params.id}).exec((err, product)=>{
        if(err) return res.sendStatus(404)
        return res.send(product);
    })
}

export default {
    categories,
    getProduct,
    getCategoryWithProducts
}