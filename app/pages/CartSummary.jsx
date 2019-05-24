import React from 'react';
import Page from './Page';
import CartSummaryPage from '../containers/CartSummary';

const CartSummary = ({...props}) => (
    <Page>
        <CartSummaryPage {...props}></CartSummaryPage>
    </Page>
);

export default CartSummary;