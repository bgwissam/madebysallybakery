const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Product = require('../models/product');

class ProductRepository {

    // get all the products
    getProducts(callback) {
        console.log('*** ProductRepository.getProducts');
        Product.count((err, prodCount) => {
            let count = prodCount;
            console.log(`Products count: ${count}`);

            Product.find({}, (err, products) => {
                if (err) {
                    console.log(`*** ProductRepository.getProducts error: ${err}`);
                    return callback(err);
                }
                callback(null, {
                    count: count,
                    products: products
                });
            });

        });
    }

    // get product by Id
    getProduct(id, callback) {
        console.log('*** ProductRepository.getProduct');
        Product.findById(id, (err, product) => {
            if (err) {
                console.log(`*** ProductRepository.getProduct error: ${err}`);
                return callback(err);
            }
            callback(null, product);
        });
    }

    // insert a  product
    insertProduct(body, callback) {
        console.log('*** ProductRepository.insertProduct');
        let product = new Product();
        console.log(body);

        product.productName = body.productName;
        product.productCovering = body.productCovering;
        product.productDimensions = body.productDimensions;
        product.productServings = body.productServings;
        product.category = body.category;
        product.description = body.description;
        product.imageUrl = body.imageUrl;

        product.save((err, product) => {
            if (err) {
                console.log(`*** ProductRepository.insertProduct error: ${err}`);
                return callback(err, null);
            }

            callback(null, product);
        });
    }
    //update current product
    updateProduct(id, body, callback) {
        console.log('*** Productrepository.editProduct');

        Product.findById(id, (err, product)  => {
            if (err) {
                console.log(`*** Productrepository.editProduct error: ${err}`);
                return callback(err);
            }

            product.productName = body.productName || product.productName;
            product.productCovering = body.productCovering || product.productCovering;
            product.productDimensions = body.productDimensions || product.productDimensions;
            product.productServings = body.productServings || product.productServings;
            product.category = body.category || product.category;
            product.description = body.description || product.description;
            product.imageUrl = body.imageUrl || product.imageUrl;


            product.save((err, product) => {
                if (err) {
                    console.log(`*** productRepository.updateProduct error: ${err}`);
                    return callback(err, null);
                }

                callback(null, product);
            });

        });
    }

    // delete a product
    deleteProduct(id, callback) {
        console.log('*** Productrepository.deleteProduct');
        Product.remove({ '_id': id }, (err, product) => {
            if (err) {
                console.log(`*** Productrepository.deleteProduct error: ${err}`);
                return callback(err, null);
            }
            callback(null, product);
        });
    }

}

module.exports = new ProductRepository();
