const orderRepo = require('../../../lib/orderRepository'),
      util = require('util');

class OrderController {

  constructor(router) {
    router.get('/', this.getCustomerOrders.bind(this));
    router.get('/:id', this.getCustomerOrder.bind(this));
    router.post('/', this.insertCustomerOrder.bind(this));
    router.delete('/:id', this.deleteCustomerOrder.bind(this));
  }

  getCustomerOrders(req, res) {
    console.log('***getCustomerOrders');
    orderRepo.getCustomerOrders((err, data) => {
      if(err){
        console.log('getCustomerOrders error: ' + util.inspect(err));
        res.json(null);
      } else {
        console.log('getCustomerOrders Ok!');
        res.json(data.orders);
      }
    });
  }

  getCustomerOrder(req, res) {
    console.log('***getCustomerOrder');
    const id = req.params.id;
    console.log('order id ' + id);
    orderRepo.getCustomerOrder(id, (err, data) => {
      if(err) {
        console.log('***getCustomerOrder error: ' + util.inspect(err));
        res.json(null);
      } else {
        console.log('***getCustomerOrder ok!');
        res.json(data);
      }
    });
  }

  insertCustomerOrder(req, res) {
    console.log('***insertCustomerOrder');
    orderRepo.insertCustomerOrder(req.body, (err, data) => {
      if(err) {
        console.log('***insertCustomerOrder error: ' + util.inspect(err));
        res.json({status: false, error: 'Insert failed', data: null});
      } else {
        console.log('***insertCustomerOrder ok!');
        res.json({status: true, error: null, order: data});
      }
    });
  }

  deleteCustomerOrder(req, res) {
    console.log('***deleteCustomerOrder');
    const id = req.params.id;
    orderRepo.deleteCustomerOrder(id, (err) => {
      if(err) {
        console.log('***deleteCustomerOrder error: ' + util.inspect(err));
        res.json({ status: false});
      } else {
        console.log('***deleteCustomerOrder ok');
        res.json({ status: true});
      }
    });

  }
}

module.exports = OrderController;
