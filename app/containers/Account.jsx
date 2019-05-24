import React from 'react';
import { Row, Col, Container, Form } from 'react-bootstrap';
import className from 'classnames/bind';
import { connect } from 'react-redux';
import styles from '../css/components/account.css';
import { Link } from 'react-router';
import { logOut, editUser } from '../actions/users';
import validate from '../utils/validations';
import { Address } from '../components';

const cx = className.bind(styles);

class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            user: {
                firstName: {
                    value: props.user.firstName,
                    error: false
                },
                lastName: {
                    value: props.user.lastName,
                    error: false
                },
                phoneNumber: {
                    value: props.user.phoneNumber,
                    error: false
                }
            },
            valid: false
        };
        this.handleEdit = this.handleEdit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.editFirstNameValue = this.editFirstNameValue.bind(this);
        this.editLastNameValue = this.editLastNameValue.bind(this);
        this.editPhoneNumberValue = this.editPhoneNumberValue.bind(this);
    }

    editFirstNameValue(e) {
        let newState = Object.assign({}, this.state);
        newState.user.firstName.value = e.target.value;
        newState.user.firstName.error = validate.name(e.target.value)
        this.setState(newState);
    }

    editLastNameValue(e) {
        let newState = Object.assign({}, this.state);
        newState.user.lastName.value = e.target.value;
        newState.user.lastName.error = validate.name(e.target.value)
        this.setState(newState);
    }

    editPhoneNumberValue(e) {
        let newState = Object.assign({}, this.state);
        newState.user.phoneNumber.value = e.target.value;
        newState.user.phoneNumber.error = validate.phoneNumber(e.target.value)
        this.setState(newState);
    }

    handleLogout() {
        const { logOut } = this.props;
        logOut();
    }

    handleSave() {
        if(Object.keys(this.state.user).every(v=>this.state.user[v].error === false)){
            this.props.editUser(this.state.user);
            this.setState({
                isEdit: false
            })
        }
    }

    handleCancel() {
        this.setState({
            isEdit: false
        })
    }

    handleEdit() {
        this.setState({
            isEdit: true
        })
    }

    render() {
        const primaryAddress = this.props.user && this.props.user.address && this.props.user.address.filter(v=>v.default==true) || [];
        console.log("Primary ", primaryAddress);
        return (

            <Container>
                <br />
                <br />
                <Row>
                    <Link to="/">
                        <span className={cx('account-home-link')}>
                            <i className="fas fa-arrow-left"></i>
                        </span>
                    </Link>
                    <Col md="10">
                        <span className={cx('account-name-header')}>{this.props.user.firstName}'s Account</span>
                    </Col>
                    <Col md="2">
                        <Link to="orderhistory">
                            <button style={{ float: "right" }} className={cx('global-primary-button', 'btn')}>Order History</button>
                        </Link>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md="6" className={cx('account-col')}>
                        <h4>Account Details</h4>
                        <hr />
                        <Form.Row>
                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="FirstNameGroup"
                            >
                                <Form.Label>First Name:  <span style={{color:"red", fontSize:"small"}}>{this.state.user.firstName.error? "Enter a valid first name":""}</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    readOnly={this.state.isEdit ? false : true}
                                    className={cx('form-custom-control')}
                                    value={this.state.user.firstName.value}
                                    onChange={this.editFirstNameValue}
                                ></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="LastNameGroup"
                            >
                                <Form.Label>Last Name:  <span style={{color:"red", fontSize:"small"}}>{this.state.user.lastName.error? "Enter a valid last name":""}</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    readOnly={this.state.isEdit ? false : true}
                                    className={cx('form-custom-control')}
                                    value={this.state.user.lastName.value}
                                    onChange={this.editLastNameValue}
                                ></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="EmailGroup"
                            >
                                <Form.Label>Email ID:</Form.Label>
                                <Form.Control
                                    type="text"
                                    readOnly
                                    className={cx('form-custom-control')}
                                    value={this.props.user.email}
                                ></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group
                                as={Col}
                                md="12"
                                controlId="PhoneNumberGroup"
                            >
                                <Form.Label>Phone Number:  <span style={{color:"red", fontSize:"small"}}>{this.state.user.phoneNumber.error? "Enter a valid phone number":""}</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    readOnly={this.state.isEdit ? false : true}
                                    className={cx('form-custom-control')}
                                    value={this.state.user.phoneNumber.value}
                                    onChange={this.editPhoneNumberValue}
                                ></Form.Control>
                            </Form.Group>
                        </Form.Row>
                        {
                            this.state.isEdit ? (
                                <div>
                                    <button className={cx('global-primary-button', 'account-save-btn', 'btn')} onClick={this.handleSave}>Save</button>
                                    <button className={cx('global-secondary-button', 'btn')} onClick={this.handleCancel}>Cancel</button>
                                </div>
                            ) : (
                                    <button className={cx('global-primary-button', 'btn')} onClick={this.handleEdit}>Edit</button>
                                )
                        }
                    </Col>
                    <Col md="6" className={cx('account-col')}>
                        <Row>
                            <Col>
                                <h4>Address Details</h4>
                                <hr />
                                <div className={cx('account-primary-address')}>
                                {
                                    primaryAddress.length>0?(
                                        <Address
                                            name={primaryAddress[0].name}
                                            id={primaryAddress[0]._id}
                                            address1={primaryAddress[0].address1}
                                            address2={primaryAddress[0].address2}
                                            phoneNumber={primaryAddress[0].phoneNumber}
                                            city={primaryAddress[0].city}
                                            state={primaryAddress[0].state}
                                            zip={primaryAddress[0].zip}
                                            default={primaryAddress[0].zip}
                                            hideButtons={true}
                                        ></Address>
                                    ):(
                                        <span>No address found. Click on 'Address Book' button to add an address. </span>
                                    )
                                }    
                                </div>
                                <Link to="/addressbook">
                                    <button className={cx('global-primary-button', 'btn')}>Address Book</button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ marginBottom: "35px" }}>
                        <hr />
                        <button style={{ float: "right" }} onClick={this.handleLogout} className={cx('global-primary-button', 'btn')}>Logout</button>
                    </Col>
                </Row>
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.user.profile
    }
}

export default connect(mapStateToProps, { logOut, editUser })(Account);