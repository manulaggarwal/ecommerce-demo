import React from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/productdetail.css';
import { Container, Row, Col, Jumbotron, Image } from 'react-bootstrap';
import { ProductSuggestion } from '../components';
import { connect } from 'react-redux';
import '../utils/arrayUtil';
import {addProductToCart} from '../actions/users'

const cx = classNames.bind(styles);


class ProductDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            primaryImage: props && props.product && props.product.imageURLs[0],
            error: false,
            success: false
        }
        this.handleThumbnailClick = this.handleThumbnailClick.bind(this);
        this.handleAddToCartClick = this.handleAddToCartClick.bind(this);
    }

    handleThumbnailClick(image) {
        this.setState({
            primaryImage: image
        });
    }

    handleAddToCartClick(productId) {
        if(this.props.authenticated){
            this.props.addProductToCart(productId);
            this.setState({success: true});
        } else {
            this.setState({error: true});
        }
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        const {product} = this.props;
        const imageArray = product.imageURLs.chunk(4);
        const thumbnailsArray = product.imageURLs.chunk(4);
        return (
        <React.Fragment >
            <Container>
                <Row className={cx('product-main-div')}></Row>
                <Row>
                    <Col md="6">
                        <Row>
                            <Col>
                                <Image fluid src={this.state.primaryImage} ></Image>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ProductSuggestion handleClick={this.handleThumbnailClick} imageURLs={thumbnailsArray}></ProductSuggestion>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6">
                        <Row className={cx('product-details-spacing')}>
                            <Col className="product-detail-value">
                                <h3>{product.name}</h3>
                                <hr />
                            </Col>
                        </Row>
                        <Row className={cx('product-details-spacing')}>
                            <Col md="8">
                                Price: <span className={cx("product-detail-value")}>€{product.max_price}</span>
                            </Col>
                        </Row>
                        <Row className={cx('product-details-spacing')}>
                            <Col md="8">
                                Brand: <span className={cx("product-detail-value")}>{product.brand}</span>
                            </Col>
                        </Row>
                        <Row className={cx('product-details-spacing')}>
                            <Col md="8">
                                Condition: <span className={cx("product-detail-value")}>{product.condition}</span>
                            </Col>
                        </Row>
                        <Row className={cx('product-details-spacing')}>
                            <Col md="8">
                                Weight: <span className={cx("product-detail-value")}>{product.weight}</span>
                            </Col>
                        </Row>
                        <Row className={cx('product-details-spacing')}>
                            <Col >
                                <button onClick={()=>{this.handleAddToCartClick(product._id)}} style={{width: "100%"}} className={cx('global-primary-button', 'btn')}>Add To Cart</button>
                            </Col>
                        </Row>
                        <Row>
                        {
                            this.state.error? (<Col><span style={{color:"red"}}>Please Login/Register first and then add to cart.</span></Col>):null
                        }
                        {
                            this.state.success? (<Col><span style={{color:"green"}}>Product added to cart!</span></Col>):null
                        }
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col>
                        <h4>Product Description</h4>        
                    </Col>
                </Row>
                <Row>
                    <Jumbotron>
                        {product.product_description}
                    </Jumbotron>
                </Row>
                <Row>
                    <Col md="12">
                        <ProductSuggestion title="Related Products" imageURLs={imageArray}></ProductSuggestion>
                    </Col>
                </Row>
                <div style={{marginBottom: "35px"}}></div>
            </Container>
        </React.Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        product: state.category.product,
        authenticated: state.user.authenticated
    }
}

export default connect(mapStateToProps, {addProductToCart})(ProductDetail);