import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import card1 from '../images/CardImage.jpg';
import { Card, Button, Car } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from '../css/components/pagenotfound.css';

const cx = classNames.bind(styles);

const PageNotFound = ({})=> {
    return (
        <Card className={cx('style')}>
        <Card.Body>
            <Card.Title>Oops!</Card.Title>
            <Card.Text>
                404 Not Found
            </Card.Text>
            <Card.Text>
                 Sorry, an error has occured, Requested page not found!
            </Card.Text>
            <Link
                to='/'
            >
                <Button type="submit" className={cx('global-primary-button')}> Let's Begin again</Button>
            </Link>
        </Card.Body>
        </Card>
    )
}

PageNotFound.propTypes = {
    
}

export default PageNotFound;