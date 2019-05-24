import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import Fslide1 from '../images/FinalSlide1.jpg';
import Fslide2 from '../images/FinalSlide2.jpg';
import Fslide3 from '../images/FinalSlide3.jpg';
import Fcard1 from '../images/FinalCard1.jpg';
import Fcard2 from '../images/FinalCard2.jpg';
import Fcard3 from '../images/FinalCard3.jpg';
import FeatureImg2 from '../images/featured-image-2.jpg';
import FeatureImg3 from '../images/featured-image-3.jpg';
import FeatureImg4 from '../images/featured-image-4.jpg';
import FeatureImg5 from '../images/featured-image-5.jpg';
import FeatureImg6 from '../images/featured-image-6.jpg';
import BestSellerImg1 from '../images/bestSeller1.jpg'
import BestSellerImg2 from '../images/bestSeller2.jpg'
import BestSellerImg3 from '../images/bestSeller3.jpg'
import BestSellerImg4 from '../images/bestSeller4.jpg'
import BestSellerImg5 from '../images/bestSeller5.jpg'

import styles from '../css/components/homepage.css';
import { HomeCarousel } from '../components';
import { Image, Card, CardDeck, Row, Col, Navbar, ListGroup, ListGroupItem, Nav, Jumbotron, Container } from 'react-bootstrap';

const cx = classNames.bind(styles);


class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            carouselData: []
        };
    }

    componentDidMount() {
        let data = [{
            image: Fslide1,
            alt: "Slide 1"
        }, {
            image: Fslide2,
            alt: "Slide 2"
        }, {
            image: Fslide3,
            alt: "Slide 3"
        }];

        this.setState({
            carouselData: data
        })
        window.scrollTo(0, 0);
    }


    render() {
        return (<div className={cx('homepage-overflow')}>
            <Row>
                <Col>
                    <HomeCarousel data={this.state.carouselData}></HomeCarousel>
                </Col>
            </Row>
            <Container>
                <Row className={cx('mt-1')}>
                    <Col>
                        <Card.Title>&nbsp;&nbsp;Featured Categories</Card.Title>
                        <hr />
                        <CardDeck className={cx('card-all')}>

                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={Fcard1} />
                            </Card>
                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={Fcard2} />
                            </Card>
                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={Fcard3} />
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
                <Row className={cx('mt-1')}>
                    <Col>
                        <Card.Title>&nbsp;&nbsp;Featured Products</Card.Title>
                        <hr />
                        <CardDeck className={cx('card-all')}>

                            <Card className={cx('card-all')}>
                                <Image variant="top" src={FeatureImg2} />
                            </Card>
                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={FeatureImg3} />
                            </Card>
                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={FeatureImg4} />
                            </Card>
                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={FeatureImg5} />
                            </Card>
                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={FeatureImg6} />
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
                <Row className={cx('mt-1')}>
                    <Col>
                        <Card.Title>&nbsp;&nbsp;Best selling products</Card.Title>
                        <hr />
                        <CardDeck className={cx('card-all')}>
                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={BestSellerImg5} />
                            </Card>
                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={BestSellerImg2} />
                            </Card>
                            <Card className={cx('card-all')}>
                                <Image variant="top" src={BestSellerImg1} style={{ width: "180px" }} />
                            </Card>
                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={BestSellerImg3} style={{ width: "125px" }} />
                            </Card>
                            <Card className={cx('card-all')}>
                                <Card.Img variant="top" src={BestSellerImg4} />
                            </Card>
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
            
        </div>)
    }

}

Homepage.propTypes = {

}

export default Homepage;