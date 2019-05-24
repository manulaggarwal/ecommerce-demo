import React from 'react';
import Page from './Page';
import ProductListingPage from '../containers/ProductListing';

const ProductListing = ({...props}) => (
    <Page>
        <ProductListingPage {...props}></ProductListingPage>
    </Page>
);

export default ProductListing;