import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/productlisting.css';
import { Container, Row, Col, DropdownButton, Dropdown, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import ScrollAnimation from 'react-animate-on-scroll';
import { getProduct } from '../actions/categories';

const cx = classNames.bind(styles);

class ProductListing extends React.Component {

    constructor(props) {
        super(props);
        this.handleSort = this.handleSort.bind(this);
        this.handleProductClick = this.handleProductClick.bind(this);
    }

    handleProductClick(id) {
        this.props.getProduct(id);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            category: nextProps.category
        })
    }

    handleSort(value) {
        value == "low" ? this.setState({
            products: this.props.category.products.sort((a, b) => parseFloat(a.min_price) - parseFloat(b.min_price))
        }) : this.setState({
            products: this.props.category.products.sort((a, b) => parseFloat(b.min_price) - parseFloat(a.min_price))
        });
    }

    render() {
        const { categoryName, products } = this.props.category;

        return (
            <React.Fragment>
                <div style={{ marginTop: "35px" }}></div>
                <Container>
                    <Row>
                        <Col md="6">
                            <h3>{categoryName}</h3>
                        </Col>
                        <Col md="6" > 
                        <DropdownButton id="dropdown-item-button" title="Sort by" className={cx('plp-category-dropdown-btn', 'plp-sort-btn-align')}>
                            <Dropdown.Item as="button" onClick={() => this.handleSort("low")}>Low-High</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={() => this.handleSort("high")}>High-Low</Dropdown.Item>
                        </DropdownButton>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        {
                            products && products.map((v, i) => (
                                <Col md="4" key={i} className={cx('category-product-item')} onClick={() => { this.handleProductClick(v._id) }}>
                                     <Row>
                                            <Col>
                                                <Image fluid src={v.imageURLs[Math.floor(Math.random() * (v.imageURLs.length - 1) + 1)]} />
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <span><b>{v.name}</b></span>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <span>From: €{v.min_price}</span>
                                            </Col>
                                            <Col md="6">
                                                <span>Brand: <b>{v.brand}</b></span>
                                            </Col>
                                        </Row>
                                </Col>
                            ))
                            
                        }
                    </Row>
                </Container>
                <div style={{ marginBottom: "35px" }}></div>
            </ React.Fragment>
        );
    }
}


function mapStateToProps(state) {
    return {
        category: state.category.selectedCategory
    }
}

export default connect(mapStateToProps, { getProduct })(ProductListing);