import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button, Row, Col } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from '../css/components/productcard.css';
import card1 from '../images/CardImage.jpg';

const cx = classNames.bind(styles);

const ProductCard = (props)=> ( 
        <Card className={props.className}>
            <Card.Title>{props.product.name}</Card.Title>
            <Card.Img variant="top" src={props.product.imageURL} fluid />   
            {!!props.showBody?(<Card.Body>{props.product.product_description}</Card.Body>):null}                   
            <Card.Text>Price: € {props.product.price}</Card.Text>
            <Button size="sm">Add to Cart</Button>       
        </Card>
); 


ProductCard.propTypes = {
    product: PropTypes.arrayOf(PropTypes.shape({
        imageURL: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        product_description: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired
    })).isRequired
    
}

export default ProductCard;