const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Order = require('../models/orders');
      email 	= require('emailjs/email');
      nodemailer = require('nodemailer');

class OrdersRepository {

  // get all the customer orders
    getCustomerOrders(callback) {
        console.log('*** OrderRepository.getCustomersOrders');
        Order.count((err, orderCount) => {
            let count = orderCount;
            console.log(`Orders count: ${count}`);

            Order.find({}, (err, orders) => {
                if (err) {
                    console.log(`*** OrderRepository.getCustomersOrders error: ${err}`);
                    return callback(err);
                }
                callback(null, {
                    count: count,
                    orders: orders
                });
            });

        });
    }

    // get a customer order
    getCustomerOrder(id, callback) {
        console.log('*** OrderRepository.getCustomerOrder');
        Order.findById(id, (err, order) => {
            if (err) {
                console.log(`*** OrderRepository.getCustomerOrder error: ${err}`);
                return callback(err);
            }
            callback(null, order);
        });
    }

    // insert a  order customer
    insertCustomerOrder(body, callback, textbody) {
        console.log('*** OrderRepository.insertCustomerOrder');
        let order = new Order();
        //console.log(body);
        //creating a container for types of orders
        body.orders = '';

        order.firstName = body.firstName;
        order.lastName = body.lastName;
        order.email = body.email;
        order.phone = body.phone;
        order.notification = body.notification;
        order.orderType1 = body.orderType1;
        order.orderType2 = body.orderType2;
        order.orderType3 = body.orderType3;
        order.orderType4 = body.orderType4;
        order.servings = body.servings;
        order.occassion = body.occassion;
        order.dateOfOccassion = body.dateOfOccassion;
        order.dateOfApplication = body.dateOfApplication;
        order.theme = body.theme;
        order.productId = body.productId;
        order.productImage = body.productImage;
        order.productName = body.productName;

        if(order.orderType1)
          body.orders += 'Cakes, ';
        if(order.orderType2)
          body.orders += 'Cupcakes, ';
        if(order.orderType3)
          body.orders += 'Cookies, ';
        if(order.orderType4)
          body.orders += 'Others';


        order.save((err, order) => {
            if (err) {
                console.log(`*** OrderRepository.insertCustomerOrder error: ${err}`);
                return callback(err, null);
            }
            this.sendingEmail(body);
            this.sendingEmailAdmin(body);
            callback(null, order);
        });
    }

    // delete a customer
    deleteCustomerOrder(id, callback) {
        console.log('*** OrderRepository.deleteCustomerOrder');
        Order.remove({ '_id': id }, (err, order) => {
            if (err) {
                console.log(`*** OrderRepository.deleteCustomerOrder: ${err}`);
                return callback(err, null);
            }
            callback(null, order);
        });
    }
    //sendng email for confirming the customer order
    sendingEmail(req, res){

      let transport = nodemailer.createTransport({
        host:    "smtp.gmail.com",
        port: 465,
        auth: {
          user:    "madebysally.bakery@gmail.com",
          pass:    "!!WSA@Home#1"
        }
      });
      const message = {
        from: 'madebysally.bakery@gmail.com',
        to:  req.email,
        subject: 'Order confirmation message',
        html: `<h1>Congratulations ` + req.firstName + ` `  + req.lastName + `</h1><p>you have placed an order throug Made By Sally</p>` + `<p> we will contact you in a while to confirm and get additional details from your side <br>` +
        `<table>
          <thead>
            <h3>Your personal details:</h3>
          </thead>
          <tr>
            <th>Email </th>
            <td>` + req.email + `</td>
          </tr>
          <tr>
            <th>Phone </th>
            <td>` + req.phone + `</td>
          </tr>
          <tr>
            <th>Notification</th>
            <td>` + req.notification + `</td>
          </tr>
          <th>
            <h3>You order details</h3>
          </th>
          <tr>
            <th>Order Types</th>
            <td>` + req.orders + `</td>
          </tr>
          <tr>
            <th>Servings</th>
            <td>` + req.servings + `</td>
          </tr>
          <tr>
            <th>Occassion</th>
            <td>` + req.occassion + `</td>
          </tr>
          <tr>
            <th>Theme</th>
            <td>` + req.theme + `</td>
          </tr>
          <tr>
            <th>Date of Occassion</th>
            <td>` + req.dateOfOccassion + `</td>
          </tr>
        </table>`
      };

      transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
      });
    }
    //sending email of new order to the admin
    sendingEmailAdmin(req, res){

      let transport = nodemailer.createTransport({
        host:    "smtp.gmail.com",
        port: 465,
        auth: {
          user:    "madebysally.bakery@gmail.com",
          pass:    "!!WSA@Home#1"
        }
      });
      const message = {
        from: 'madebysally.bakery@gmail.com',
        to: 'madebysally.bakery@gmail.com',
        subject: 'New order for: ' + req.firstName + ' ' + req.lastName,
        html:
        `<table>
          <thead>
            <h3>Client personal details:</h3>
          </thead>
          <tr>
            <th>First Name </th>
            <td>` + req.firstName + `</td>
          </tr>
          <tr>
            <th>Last Name </th>
            <td>` + req.lastName + `</td>
          </tr>
          <tr>
            <th>Email </th>
            <td>` + req.email + `</td>
          </tr>
          <tr>
            <th>Phone </th>
            <td>` + req.phone + `</td>
          </tr>
          <tr>
            <th>Notification</th>
            <td>` + req.notification + `</td>
          </tr>
          <th>
            <h3>You order details</h3>
          </th>
          <tr>
            <th>Order Types</th>
            <td>` + req.orders + `</td>
          </tr>
          <tr>
            <th>Servings</th>
            <td>` + req.servings + `</td>
          </tr>
          <tr>
            <th>Occassion</th>
            <td>` + req.occassion + `</td>
          </tr>
          <tr>
            <th>Theme</th>
            <td>` + req.theme + `</td>
          </tr>
          <tr>
            <th>Date of Occassion</th>
            <td>` + req.dateOfOccassion + `</td>
          </tr>
        </table>`
      };

      transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
      });
    }


  sendMail(req, res) {

      const server 	= email.server.connect({
        user:    "bgwissam@gmail.com",
        password:"!!WSA@Home#1",
        host:    "smtp.gmail.com",
        ssl:     true,
        port:     465
      });


        // send the message and get a callback with an error or details of the message that was sent
        server.send({
          text:
          'Order details:\n First Name: ' + req.firstName +
                    '\n Last Name: ' + req.lastName +
                    '\n Email: ' + req.email +
                    '\n Phone: ' + req.phone +
                    '\n Notification: ' + req.notification +
                    '\n Order Types: ' + req.orderType1 + ', '  + req.orderType2 + ', ' + req.orderType3 + ', ' + req.orderType4 +
                    '\n Servings: ' + req.servings +
                    '\n Occassion: ' + req.occassion +
                    '\n Date of Occassion ' + req.dateOfOccassion +
                    '\n Date of Application ' + req.dateOfApplication +
                    '\n Theme: ' + req.theme,
            html: "<h1><b>This is just testing</b></h1>",
            from:    "<bgwissam@gmail.com>",
            to:      "bgwissam@hotmail.com",
            cc:       req.email,
            subject: "testing emailjs"
        }, function(err, message) {
          if(err) {
            console.log(err || message);
          } else {
            return console.log('email was sent successfully');
          }
        });
    }

}

module.exports = new OrdersRepository();
