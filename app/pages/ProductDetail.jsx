import React from 'react';
import Page from './Page';
import ProductDetailPage from '../containers/ProductDetail';

const ProductDetail = ({...props}) => (
    <Page>
        <ProductDetailPage {...props}></ProductDetailPage>
    </Page>
);

export default ProductDetail;