import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Navbar, DropdownButton, Row, Dropdown, Col } from 'react-bootstrap';
import AppLogoImage from '../images/alphakart-logo.png';
import CartLogoImage from '../images/cart-image.png';
import styles from '../css/components/header.css';
import Logo from '../components/Logo';
import Search from './Search';
import LoginRegister from './LoginRegister';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { categories, getCategory } from '../actions/categories';


const cx = classNames.bind(styles);

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            type: "",
            categories: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleCategoryClick = this.handleCategoryClick.bind(this);
    }

    componentDidMount() {
        this.props.categories();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            categories: nextProps.categoryList
        });
    }

    handleClick(type) {
        this.setState({
            type: type,
            show: !this.state.show
        })
    }

    handleCategoryClick(category) {
        this.props.getCategory(category._id);
    }

    toggleModal() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        return (<React.Fragment>
            <div className={cx('header-main-div')}>
                <Navbar collapseOnSelect expand="lg" >
                    <Navbar.Brand>
                        <Logo href="/" className={cx('header-logo')} src={AppLogoImage}></Logo>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                </Navbar>
                <div className={cx('header-search-div', 'header-element')}>
                    <Search></Search>
                </div>
                <div className={cx('header-categories-div', 'header-element')}>
                    <DropdownButton alignRight id="header-category-dropdown" className={cx('header-category-dropdown-btn')} title="Categories">
                        <Row>
                            {
                                this.state.categories.map((v, i) => (
                                    <Col md="4" key={i}>
                                        <Dropdown.Item onClick={() => { this.handleCategoryClick(v) }}>{v.categoryName}</Dropdown.Item>
                                    </Col>
                                ))
                            }
                        </Row>
                    </DropdownButton>
                </div>
                <div className={cx('header-account-div', 'header-element')}>

                    {
                        this.props.authenticated ? (
                            <Link
                                style={{ color: "black", textDecoration: "none" }}
                                to="/accounts"
                            >
                                <i className="fas fa-user fa-lg"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>{this.props.profile.firstName}</span>
                            </Link>
                        ) : (
                                <div>
                                    <Link
                                        className={cx('header-link')}
                                        onClick={() => { this.handleClick('login') }}
                                    >Login </Link> /
                                <Link
                                        className={cx('header-link')}
                                        onClick={() => { this.handleClick('register') }}
                                    > Register
                                </Link>
                                </div>
                            )
                    }
                </div>
                
                    <div className={cx('header-cart-div', 'header-element')}>
                        <Logo href="/cart" className={cx('header-cart-logo')} src={CartLogoImage}></Logo>
                        <div className={cx('header-cart-counter')}><span>{this.props.profile && this.props.profile.cartItems ? this.props.profile.cartItems.length : 0}</span></div>
                    </div>
                
                {
                    this.state.show ? (
                        <LoginRegister
                            type={this.state.type}
                            close={this.toggleModal}
                        >
                        </LoginRegister>) : null
                }
            </div>
        </React.Fragment>);
    }
}

Header.propTypes = {

}

function mapStateToProps(state) {
    return {
        authenticated: state.user.authenticated,
        profile: state.user.profile,
        categoryList: state.category.category
    }
}

export default connect(mapStateToProps, { categories, getCategory })(Header);