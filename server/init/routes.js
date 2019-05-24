/**
 * Routes for express app
 */
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers } from '../db';

const usersController = controllers && controllers.users;
const categoryController = controllers && controllers.category;
const orderController = controllers && controllers.order;

export default (app) => {
  // user routes
  if (usersController) {
    app.post('/sessions', usersController.login);
    app.post('/users', usersController.signUp);
    app.delete('/sessions', usersController.logout);
    app.put('/users/edit', usersController.editDetails);
    app.post('/users/addAddress', usersController.addAddress);
    app.put('/users/editAddress', usersController.editAddress);
    app.delete('/users/deleteAddress/:id', usersController.deleteAddress);
    app.post('/users/cart/add/:id', usersController.addToCart);
    app.get('/users/cart', usersController.fetchCart);
    app.delete('/users/cart/remove/:id', usersController.removeFromCart);
  } else {
    console.warn(unsupportedMessage('users routes'));
  }

  if(categoryController) {
    app.get('/categories', categoryController.categories);
    app.get('/category/:id', categoryController.getCategoryWithProducts);
    app.get('/product/:id', categoryController.getProduct);
  } else {
    console.warn(unsupportedMessage('category routes'));
  }

  if(orderController) {
    app.get('/order/create', orderController.createOrder);  //Setting up Order object for the current user.
    app.get('/order/:id', orderController.getOrder);
    app.post('/order/addShippingAddress', orderController.addShippingAddress);
    app.post('/order/addBillingAddress', orderController.addBillingAddress);
    app.post('/order/addPaymentDetails', orderController.addPaymentDetails);
  }

};
