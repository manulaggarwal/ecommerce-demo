import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'react-bootstrap';
import {Link} from 'react-router';

const BreadcrumbFn = ({...props})=> {
    return (  
        <Breadcrumb>
            <Breadcrumb.Item> <Link to="/">Home</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/category">Product Listing</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/product">Product Detail</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/cartsummary">Cart Summary</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/checkout">Checkout</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/orderconfirmation">Order Confirmation</Link></Breadcrumb.Item>
            <Breadcrumb.Item><Link to="/profile">Profile</Link></Breadcrumb.Item>
        </Breadcrumb>        
    )    
}

BreadcrumbFn.propTypes = {
    
}

export default BreadcrumbFn;