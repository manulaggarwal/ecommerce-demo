import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, FormControl, Container } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from '../css/components/paymentinformation.css';


const cx = classNames.bind(styles);

const PaymentInformation = ({...props})=> {
    
    return ( 
        <Form>
        <Form.Row>
            <Form.Group 
                as={Col}
                md="6"
                controlId="validationCustom01"
            >
                <Form.Label>Name on card</Form.Label>
                <Form.Control
                required
                type="text"
                className={cx('form-custom-control')}
                placeholder="Full Name as on Card"
                />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group 
                as={Col}
                md="6"
            >
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                required
                type="text"
                className={cx('form-custom-control')}
                placeholder="0000 0000 0000 0000"
                />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group
                as={Col}
                md="2"
            >
                <Form.Label>Expiry</Form.Label>
                <Form.Control
                    required
                    type="text"
                    className={cx('form-custom-control')}
                    placeholder="MM"
                />
            </Form.Group>
            <Form.Group
                as={Col}
                md="2"
            >
                <Form.Label>Year</Form.Label>
                <Form.Control
                    required
                    type="text"
                    className={cx('form-custom-control')}
                    placeholder="YYYY"
                />
            </Form.Group>
            <Form.Group
                as={Col}
                md="2"
            >
                <Form.Label>CVV</Form.Label>
                <Form.Control
                required
                type="text"
                className={cx('form-custom-control')}
                placeholder="CVV"
            />
            </Form.Group>
        </Form.Row>
        </Form>  
  )    
}

PaymentInformation.propTypes = {
    
}

export default PaymentInformation;