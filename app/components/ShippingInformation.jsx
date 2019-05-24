import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, FormControl } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from '../css/components/shippinginformation.css';


const cx = classNames.bind(styles);

const ShippingInformation = ({...props})=> {
    return ( 
        <Form>
        <Form.Row>
                <Form.Label>Shipping Information</Form.Label>
        </Form.Row>
            
        <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                required
                type="text"
                className={cx('form-custom-control')}
                placeholder="First name"
                />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                required
                type="text"
                className={cx('form-custom-control')}
                placeholder="Last name"
                />
            </Form.Group>
        </Form.Row>
        
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"
            className={cx('form-custom-control')}
            placeholder="Enter email" />
            </Form.Group>

        </Form.Row>

        <Form.Group controlId="formGridAddress1">
            <Form.Label>Address Line 1</Form.Label>
            <Form.Control className={cx('form-custom-control')}
             placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
            <Form.Label>Address Line 2</Form.Label>
            <Form.Control className={cx('form-custom-control')}
             placeholder="Apartment, studio, or floor" />
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control className={cx('form-custom-control')}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control className={cx('form-custom-control')} as="select">
                <option>Choose...</option>
                <option>...</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control className={cx('form-custom-control')}/>
            </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="&nbsp;&nbsp;&nbsp;Keep this as my default address" / >
        </Form.Group>

        </Form>
            
  )    
}




ShippingInformation.propTypes = {
    
}

export default ShippingInformation;