import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/cartsummary.css';
import { Row, Col, Container, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getCartItems, removeCartItem } from '../actions/users';
import { Link } from 'react-router';

const cx = classNames.bind(styles);


class CartSummary extends React.Component {

    constructor(props) {
        super(props);
        this.handleTrashClick = this.handleTrashClick.bind(this);
    }

    handleTrashClick(id) {
        this.props.removeCartItem(id);
    }

    componentDidMount() {
        this.props.getCartItems();
    }

    render() {
        const { products } = this.props;
        return (
            <Container>
                <Row style={{ marginTop: "35px" }}></Row>
                <Row>
                    <Col>
                        <h3>My Cart</h3>
                        <hr />
                    </Col>
                </Row>
                <Row style={{ marginBottom: "35px" }}>
                    {
                        products.length > 0 ? products.map((v, i) => {
                            return (
                                <Col md="12" key={i}>
                                    <Row style={{ marginBottom: "15px" }}>
                                        <Col md="3">
                                            <Image style={{ maxWidth: "150px" }} fluid src={v.imageURLs[0]}></Image>
                                        </Col>
                                        <Col md="7">
                                            <Row style={{ marginBottom: "20px" }}>
                                                <Col><span>{v.name}</span></Col>
                                            </Row>
                                            <Row>
                                                <Col><span>Price: €{v.min_price}</span></Col>
                                            </Row>
                                        </Col>
                                        <Col md="2">
                                            <div style={{ cursor: "pointer" }} onClick={() => { this.handleTrashClick(v._id) }}>
                                                <i className={cx("fas fa-trash-alt", "cart-trash")}></i>
                                            </div>
                                        </Col>
                                    </Row>
                                    <hr />
                                </Col>
                            )
                        }) : (
                                <Col>
                                    <span>There are no items in the cart.</span>
                                </Col>
                            )
                    }
                </Row>
                <Row>
                    <Col>
                        <Link to="/checkout">
                            <button disabled={products.length == 0 ? true : false} style={{ float: "right" }} type="submit" className={cx('global-primary-button', 'btn')}>Proceed to Checkout</button>
                        </Link>
                    </Col>
                </Row>
                <Row style={{ marginBottom: "35px" }}></Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.user.cart
    }
}

export default connect(mapStateToProps, { getCartItems, removeCartItem })(CartSummary);