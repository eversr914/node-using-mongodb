import mongoose from 'mongoose';
import { ProductSchema } from '../models/models'

const Product = mongoose.model('Product', ProductSchema);

export const addnewProduct = (req, res) => {
    let newProduct = new Product(reg.body);

    newProduct.save((err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
}

export const getProducts = (req, res) => {
    Product.find({}, (err, Product) =>{
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
}

export const getProductWithID = (req, res) => {
    Product.findByID(req.params.ProductID, (err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json(Product);
    });
}

export const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.ProductID}, (err, Product) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted Product'});
    })
}
