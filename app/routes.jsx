import React from 'react';
import { Route, IndexRoute } from 'react-router';
import OrderHistory from './containers/OrderHistory';
import { App, Home, ProductDetail, ProductListing, Checkout, CartSummary, About, OrderConfirmation, Addressbook, Account,PaymentInfo } from './pages';
import PageNotFound from './components/PageNotFound';
import ContactUs from './components/ContactUs';
//import PaymentInformation from './components/PaymentInformation';

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home}></Route>
      <Route path="addressbook" component={Addressbook} onEnter={requireAuth} />
      <Route path="category" component={ProductListing} />
      <Route path="category/:id" component={ProductListing}/>
      <Route path="product/:id" component={ProductDetail} />
      <Route path="cart" component={CartSummary} />
      <Route path="checkout" component={Checkout} onEnter={requireAuth} />
      <Route path="orderconfirmation" component={OrderConfirmation} />
      <Route path="accounts" component={Account} onEnter={requireAuth} />
      <Route path="about" component={About} />
      <Route path="orderhistory" component={OrderHistory} onEnter={requireAuth} />
      <Route path="ContactUs" component={ContactUs} />
      <Route path="payment" component={PaymentInfo} />
      <Route path="*" component={PageNotFound} />
    </Route>
  );
};
