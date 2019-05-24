import React from 'react';
import PropTypes from 'prop-types';
import { Table, thead, tr, th, Form, Row } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from '../css/components/orderdetails.css';


const cx = classNames.bind(styles);

const OrderDetails = ({...props})=> {
    return ( 
        <Form>
            <Form.Label>Order Details</Form.Label>
        <Table striped bordered hover className={cx('align-right')}>
            <thead>
                <tr>
                <th>#</th>
                <th>Products</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1 x iPhone</td>
                    <td>277</td>
                    </tr>
                <tr>
                <td>2</td>
                <td>1 x iPhone</td>
                <td>277</td>
                </tr>
            </tbody>
            <tbody>
              <tr>
                <td colSpan="2">Total</td>
                <td>277</td>
                </tr>
            </tbody>
            </Table>
            </Form>  
  )    
}

OrderDetails.propTypes = {
    
}

export default OrderDetails;