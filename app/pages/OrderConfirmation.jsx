import React from 'react';
import Page from './Page';
import OrderConfirmationPage from '../containers/OrderConfirmation';

const OrderConfirmation = ({...props}) => (
    <Page>
        <OrderConfirmationPage {...props}></OrderConfirmationPage>
    </Page>
);

export default OrderConfirmation;