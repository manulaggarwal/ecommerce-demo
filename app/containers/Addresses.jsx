import React from 'react';
import classNames from 'classnames/bind';
import styles from '../css/components/addresses.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Address } from '../components';
import { Link } from 'react-router';
import AddEditAddress from './AddEditAddress';
import {connect} from 'react-redux';
import {addAddress, editAddress, deleteAddress} from '../actions/users';

const cx = classNames.bind(styles);


class Addresses extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            type: "",
            editAddressData: null
        }
        this.handleClick = this.handleClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleAddressData = this.handleAddressData.bind(this);
        this.handleDeleteAddress = this.handleDeleteAddress.bind(this);
        this.handleEditAddress = this.handleEditAddress.bind(this);
    }

    handleEditAddress(data) {
        this.setState({
            type: 'edit',
            show: !this.state.show,
            editAddressData: data
        })
    }

    handleDeleteAddress(id) {
        this.props.deleteAddress(id);
    }

    handleAddressData(address) {
        if(this.state.type == 'add')
            this.props.addAddress(address);
        else
            this.props.editAddress(address);
        this.setState({
            show: !this.state.show
        })
    }

    handleClick(type) {
        this.setState({
            type: type,
            show: !this.state.show
        })
    }

    toggleModal() {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        const data = this.props.profile && this.props.profile.address||[];
        return (
            <Container>
                <br />
                <br />
                <Row>
                    <Link to="/accounts">
                        <span className={cx('address-home-link')}>
                            <i className="fas fa-arrow-left"></i>
                        </span>
                    </Link>
                </Row>
                <Row>
                    <Col>
                        <h3>My Address Book</h3>
                        <hr />
                    </Col>
                </Row>
                <Row>
                    {
                        data.length>0 ? data.map((obj, i) => (
                            <Col key={i} md="4">
                                <Address
                                    name={obj.name}
                                    id={obj._id}
                                    address1={obj.address1}
                                    address2={obj.address2}
                                    phoneNumber={obj.phoneNumber}
                                    city={obj.city}
                                    state={obj.state}
                                    zip={obj.zip}
                                    default={obj.default}
                                    handleEditAddress={this.handleEditAddress}
                                    handleDeleteAddress={this.handleDeleteAddress}
                                ></Address>
                            </Col>
                        )) : (
                                <Col>
                                    <h4>There are no address in your address book. Add now and start shopping!</h4>
                                </Col>)
                    }
                </Row>


                <div className={cx('margin-padding', 'addresses-link', 'addresses-link:hover', 'addresses-bold')} >
                    <Link onClick={() => { this.handleClick('add') }}>
                        <button className={cx('global-primary-button', 'btn')}>Add new address</button>
                    </Link>
                    <Row style={{ marginBottom: "35px" }}></Row>
                    {
                        this.state.show ? (
                            <AddEditAddress
                                type={this.state.type}
                                close={this.toggleModal}
                                addEditAddress={this.handleAddressData}
                                data={this.state.editAddressData}
                            >
                            </AddEditAddress>) : null
                    }
                </div>
            </Container>
        );
    }
}

function mapStateToProps(state){
    return {
        profile: state.user.profile
    }
}

export default connect(mapStateToProps, {addAddress, editAddress, deleteAddress})(Addresses);