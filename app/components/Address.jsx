import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router';
import classNames from 'classnames/bind';
import styles from '../css/components/address.css';

const cx = classNames.bind(styles);

const Address = ({ ...props }) => (
    <Card >
        <Card.Body>
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{props.address1}</Card.Text>
            <Card.Text>{props.address2}</Card.Text>
            <Card.Text>{props.city}</Card.Text>
            <Card.Text>{props.state}</Card.Text>
            <Card.Text>{props.zip}
            {
                props.hideButtons ? null : (
                    <span >  
                        <Card.Link style={{ cursor: "pointer" }} onClick={() => { props.handleEditAddress(props) }}>Edit</Card.Link>
                        <Card.Link style={{ cursor: "pointer" }} onClick={() => { props.handleDeleteAddress(props.id) }}>Delete</Card.Link>
                    </span>                 
                )
            }
            {
                props.default ? (
                    <Card.Text style={{ float: "right" }}>Default</Card.Text>
                ) : (

                        <Card.Link style={{ cursor: "pointer", float: "right" }} onClick={() => { props.handleMakeDefault() }}>Make Default</Card.Link>
                    )
            }
            </Card.Text>
        </Card.Body>
    </Card>
)

Address.propTypes = {

}

export default Address;