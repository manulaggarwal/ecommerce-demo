import React from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/checkout.css';
import Progress from 'components/ProgressBar';
import { Row, Col, Input, Container } from 'react-bootstrap';
import { ShippingInformation, PaymentInformation, OrderDetails, Address, AddNewAddress } from '../components';
import { createOrder, addShippingAddress, addBillingAddress, billingAddressSameAsShippingAddressToggle } from '../actions/order';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/FormControl';

const cx = classNames.bind(styles);

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBillingAddressSame: false,
            show: false,
            type: "",
            percentageCompleted: 0,
            percentageUpdated: false
        }
        this.handleBillingAddressChange = this.handleBillingAddressChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.openAddressModal = this.openAddressModal.bind(this);
    }

    openAddressModal(type) {
        this.setState({
            show: !this.state.show,
            type: type
        });
    }

    handleAddShippingAddress(data) {
        this.props.addShippingAddress(data);
        this.setState({
            show: !this.state.show
        });
    }

    handleAddBillingAddress(data) {
        this.props.addBillingAddress(data);
        this.setState({
            show: !this.state.show
        });
    }

    handleAddress(data) {
        data.orderId = this.props.order._id
        this.state.type == "shipping" ? this.handleAddShippingAddress(data) : this.handleAddBillingAddress(data);
    }

    handleBillingAddressChange(e) {
        this.setState({
            isBillingAddressSame: e.target.checked,
            percentageUpdated: false
        })
        if (e.target.checked) {
            this.updateBillingAddress(this.props.order.shippingAddress);
        } else {
            this.updateBillingAddress({});
        }

    }

    updateBillingAddress(data) {
        data.orderId = this.props.order._id;
        this.props.billingAddressSameAsShippingAddressToggle(data);
    }

    closeModal() {
        this.setState({ show: false });
    }

    componentDidUpdate() {

        if(this.props.order){}


        // this.calculateProgressPercent();
    }

    // calculateProgressPercent(){
    //     if(this.props.order && !this.state.percentageUpdated){
    //         if(this.props.order.shippingAddress.name && this.props.order.billingAddress.name) {
    //             this.setState({
    //                 percentageCompleted: 100,
    //                 percentageUpdated: true
    //             })
    //         } else if(this.props.order.shippingAddress.name) {
    //             this.setState({
    //                 percentageCompleted: 50,
    //                 percentageUpdated: true
    //             })
    //         } else if(this.props.order.billingAddress.name) {
    //             this.setState({
    //                 percentageCompleted: 50,
    //                 percentageUpdated: true
    //             })
    //         }
    //     }
    // }   

    componentDidMount() {
        if(this.props.user.address && this.props.user.address.length>0){
            this.props.createOrder(this.props.user.address.filter(v=>v==true));
        }
    }

    render() {
        const shippingAddress = this.props.order && this.props.order && this.props.order.shippingAddress;
        const billingAddress = this.props.order && this.props.order && this.props.order.billingAddress;
        return (<div>
            {/* <Progress percentage={this.state.percentageCompleted}></Progress> */}
            <Container>
                <br />
                <br />
                <Row>
                    <Col md="6">
                        <h3>Shipping Address</h3>
                        <hr />
                        <Row>
                            {
                                shippingAddress && shippingAddress.name ? (
                                    <Col md="4" style={{ minWidth: "55%" }}>
                                        <Address
                                            name={shippingAddress.name}
                                            id={shippingAddress._id}
                                            address1={shippingAddress.address1}
                                            address2={shippingAddress.address2}
                                            phoneNumber={shippingAddress.phoneNumber}
                                            city={shippingAddress.city}
                                            state={shippingAddress.state}
                                            zip={shippingAddress.zip}
                                            default={shippingAddress.zip}
                                            hideButtons={true}
                                        ></Address>
                                    </Col>
                                ) : (
                                        <Col>
                                            <label>There are no addresses. Click on 'Add Address'.</label>
                                            <div style={{ marginTop: "25px", marginBottom: "25px" }}>
                                                <button onClick={() => { this.openAddressModal('shipping') }} className={cx('global-primary-button', 'btn')}>Add Address</button>
                                            </div>
                                        </Col>
                                    )
                            }
                        </Row>
                        <Row style={{ marginTop: "25px" }}>
                            <Col>
                                {
                                    this.props.user && this.props.user.address.length > 1 ? (
                                        <button className={cx('global-primary-button', 'btn')}>Select Address</button>
                                    ) : null
                                }
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <h3>Billing Address</h3>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <Row>
                                            {
                                                billingAddress && billingAddress.name ? (
                                                    <Col md="4" style={{ minWidth: "55%" }}>
                                                        <Address
                                                            name={billingAddress.name}
                                                            id={billingAddress._id}
                                                            address1={billingAddress.address1}
                                                            address2={billingAddress.address2}
                                                            phoneNumber={billingAddress.phoneNumber}
                                                            city={billingAddress.city}
                                                            state={billingAddress.state}
                                                            zip={billingAddress.zip}
                                                            hideButtons={true}
                                                        ></Address>
                                                    </Col>
                                                ) : null
                                            }
                                        </Row>
                                        <Row style={{ marginTop: "25px" }}>
                                            <Col>
                                                <label className='checkbox-container'>
                                                    Same as Shipping Address
                                                    <input onClick={this.handleBillingAddressChange} checked={this.state.isBillingAddressSame} type="checkbox"></input>
                                                    <span className="checkmark"></span>
                                                </label>
                                            </Col>
                                        </Row>
                                        {
                                            this.state.isBillingAddressSame ? null : this.props.order && this.props.order.billingAddress && this.props.order.billingAddress.name ? (
                                                <Row>
                                                    <Col>
                                                        <div style={{ marginTop: "25px" }}>
                                                            <button onClick={() => { this.openAddressModal('billing') }} className={cx('global-primary-button', 'btn')}>Edit Billing Address</button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            ) : (
                                                    <Row>
                                                        <Col>
                                                            <div style={{ marginTop: "25px" }}>
                                                                <button onClick={() => { this.openAddressModal('billing') }} className={cx('global-primary-button', 'btn')}>Add Billing Address</button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                )
                                        }
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            {
                                this.state.show ?
                                    <AddNewAddress
                                        show={this.state.show}
                                        handleModalClose={this.closeModal}
                                        handleSubmit={this.handleAddress}
                                    ></AddNewAddress> : null
                            }
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h3>Payment Information</h3>
                                <hr />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <PaymentInformation></PaymentInformation>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>)
    }

}

function mapStateToProps(state) {
    return {
        user: state.user.profile,
        order: state.order.order
    }
}

export default connect(mapStateToProps, { createOrder, addBillingAddress, addShippingAddress, billingAddressSameAsShippingAddressToggle })(Checkout);