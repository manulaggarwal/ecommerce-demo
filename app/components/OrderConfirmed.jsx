import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from '../css/components/orderconfirmed.css';
import {Link} from 'react-router';

const cx = classNames.bind(styles);

const OrderConfirmed = ({...props})=> {
    return (      
    <Card border="success" className={cx('card-width')}>
        <Card.Header><b>Order Confirmed!</b></Card.Header>
        <Card.Body>
            <Card.Title>Order Number: 1</Card.Title>
            <Card.Text>
                Thank you for shopping with us.
                Your order of <b>€ 26</b> at AlpahKART has been confirmed. A confirmation has been sent to you at abc@yahoo.com
            </Card.Text>
            <div>
                <Button type="submit" className={cx('global-primary-button', 'btn-spacebw')} onClick={(e) => { window.print() }} >Print</Button>    
                <Link to="/">
                    <Button type="submit" className={cx('global-primary-button', 'btn-spacebw')}>Continue Shopping</Button>
                </Link>
                
                
            </div>
        </Card.Body>
    </Card>
  )    
}

OrderConfirmed.propTypes = {
    
}

export default OrderConfirmed;