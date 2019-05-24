import React from 'react';
import {Link} from 'react-router';
import { Card, Button, Car } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from '../css/components/pagenotfound.css';

const cx = classNames.bind(styles);

const ContactUs = ({})=> {
    return (
        <Card className={cx('style')}>
        <Card.Body>
            <Card.Title> ContactUs</Card.Title>
            <Card.Text>
                <h1>Alpha Kart</h1>
                MPS3,<br/>
                Heidelberg-69123<br/>
                <a href = "mailto:abc@example.com?subject = Feedback&body = Message">
                Send Feedback 
                </a> to abc@example.com <br/>
                <a href="tel:+311-555-2368">+311-555-2368</a><br/>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

            </Card.Text>          
        </Card.Body>
        </Card>
    )
}

ContactUs.propTypes = {
    
}

export default ContactUs;