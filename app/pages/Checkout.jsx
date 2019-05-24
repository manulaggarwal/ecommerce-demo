import React from 'react';
import Page from './Page';
import CheckoutPage from '../containers/Checkout';

const Checkout = ({...props}) => (
    <Page>
        <CheckoutPage {...props}></CheckoutPage>
    </Page>
);

export default Checkout;