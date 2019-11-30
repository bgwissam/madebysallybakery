const productRepo = require('../../../lib/productRepository'),
      util = require('util');

class ProductController {

    constructor(router) {
        router.get('/', this.getProducts.bind(this));
        router.get('/:id', this.getProduct.bind(this));
        router.post('/', this.insertProduct.bind(this));
        router.put('/:id', this.updateProduct.bind(this));
        router.delete('/:id', this.deleteProduct.bind(this));
    }

    getProducts(req, res) {
        console.log('*** getProducts');
        productRepo.getProducts((err, data) => {
            if (err) {
                console.log('*** getProducts error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getProducts ok');
                res.json(data.products);
            }
        });
    }


    getProduct(req, res) {
        console.log('*** getProduct');
        const id = req.params.id;
        console.log(id);

        productRepo.getProduct(id, (err, product) => {
            if (err) {
                console.log('*** getProduct error: ' + util.inspect(err));
                res.json(null);
            } else {
                console.log('*** getProduct ok');
                res.json(product);
            }
        });
    }

    insertProduct(req, res) {
        console.log('*** insertProduct');

        productRepo.insertProduct(req.body, (err, product) => {
            if (err) {
                console.log('*** productRepo.insertProduct error: ' + util.inspect(err));
                res.json({status: false, error: 'Insert failed', product: null});
            } else {
                console.log('*** insertProduct ok');
                res.json({ status: true, error: null, product: product });
            }
        });

    }

    updateProduct(req, res) {
        console.log('*** updateProduct');
        console.log('*** req.body');
        console.log(req.body);

        if (!req.body) {
            throw new Error('Product is required');
        }


        productRepo.updateProduct(req.params.id, req.body, (err, product) => {
            if (err) {
                console.log('*** updateProduct error: ' + util.inspect(err));
                res.json({ status: false, error: 'Update failed', product: null });
            } else {
                console.log('*** updateProduct ok');
                res.json({ status: true, error: null, product: product });
            }
        });

    }

    deleteProduct(req, res) {
        console.log('*** deleteProduct');

        productRepo.deleteProduct(req.params.id, (err) => {
            if (err) {
                console.log('*** deleteProduct error: ' + util.inspect(err));
                res.json({ status: false });
            } else {
                console.log('*** deleteProduct ok');
                res.json({ status: true });
            }
        });
    }

}

module.exports = ProductController;
