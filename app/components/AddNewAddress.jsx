import React from 'react';
import { Modal } from './index';
import classNames from 'classnames/bind';
import { Col, Form } from 'react-bootstrap';
import styles from '../css/components/login.css';
import validate from '../utils/validations';

const cx = classNames.bind(styles);

class AddNewAddress extends React.Component {
    constructor(props) {
        super(props);
        const address = props.address||{};
        this.state = {
            user: {
                name: {
                    value: address.name || '',
                    error: false
                },
                phoneNumber: {
                    value: address.phoneNumber || '',
                    error: false
                },
                address1: {
                    value: address.address1 || '',
                    error: false
                },
                address2: {
                    value: address.address2 || '',
                    error: false
                },
                city: {
                    value: address.city || '',
                    error: false
                },
                state: {
                    value: address.state || '',
                    error: false
                },
                zip: {
                    value: address.zip || '',
                    error: false
                }
            },
            valid: false
        }
        this.setName = this.setName.bind(this);
        this.setPhoneNumber = this.setPhoneNumber.bind(this);
        this.setAddress1 = this.setAddress1.bind(this);
        this.setAddress2 = this.setAddress2.bind(this);
        this.setCity = this.setCity.bind(this);
        this.setUserState = this.setUserState.bind(this);
        this.setZip = this.setZip.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setName(e) {
        let newState = Object.assign({}, this.state);
        newState.user.name.value = e.target.value;
        newState.user.name.error = validate.name(e.target.value)
        this.setState(newState);
    }


    setPhoneNumber(e) {
        let newState = Object.assign({}, this.state);
        newState.user.phoneNumber.value = e.target.value;
        newState.user.phoneNumber.error = validate.phoneNumber(e.target.value)
        this.setState(newState);
    }

    setAddress1(e) {
        let newState = Object.assign({}, this.state);
        newState.user.address1.value = e.target.value;
        newState.user.address1.error = e.target.value == ""?false : validate.name(e.target.value)
        this.setState(newState);
    }
    
    
    setAddress2(e) {
        let newState = Object.assign({}, this.state);
        newState.user.address2.value = e.target.value;
        newState.user.address2.error = false;
        this.setState(newState);
    }

    setCity(e) {
        let newState = Object.assign({}, this.state);
        newState.user.city.value = e.target.value;
        newState.user.city.error = e.target.value == ""?false : validate.name(e.target.value)
        this.setState(newState);
    }

    setUserState(e) {
        let newState = Object.assign({}, this.state);
        newState.user.state.value = e.target.value;
        newState.user.state.error = e.target.value == ""?false : validate.name(e.target.value)
        this.setState(newState);
    }


    setZip(e) {
        let newState = Object.assign({}, this.state);
        newState.user.zip.value = e.target.value;
        newState.user.zip.error = e.target.value == ""?false : validate.zip(e.target.value)
        this.setState(newState);
    }

    handleSubmit(e) {
        if(Object.keys(this.state.user).every(v=>this.state.user[v].error === false)){
            const {user} = this.state;
            let address = {
                name: user.name.value,
                phoneNumber: user.phoneNumber.value,
                address1: user.address1.value,
                address2: user.address2.value,
                city: user.city.value,
                state: user.state.value,
                zip: user.zip.value,
                default: true
            }
            if(this.props.address && this.props.address.id) {
                address.id = this.props.address.id;
            }
            this.props.handleSubmit(address);
        }
    }



    render() {
        return (
            <Modal
                handleModalClose={this.props.handleModalClose}
                show={this.props.show}
                title="Add New Address"
                handleSubmit={this.handleSubmit}
            >
                <Form
                    noValidate
                    validated={this.state.valid}
                >
                    <Form.Row>
                        <Form.Group
                            as={Col}
                            md="12"
                            controlId="NameGroup"
                        >
                            <Form.Label>Name <span style={{color:"red", fontSize:"small"}}>{this.state.user.name.error? "Enter full name":""}</span></Form.Label>
                            <Form.Control
                                required
                                value={this.state.user.name.value}
                                type="text"
                                placeholder="Enter Full Name"
                                className={this.state.user.name.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setName}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            controlId="PhoneNumberGroup"
                            as={Col}
                            md="12"
                        >
                            <Form.Label>Phone No. <span style={{color:"red", fontSize:"small"}}>{this.state.user.phoneNumber.error? "Enter a valid phone number":""}</span></Form.Label>
                            <Form.Control
                                required
                                value={this.state.user.phoneNumber.value}
                                type="text"
                                placeholder="Enter Phone Number"
                                className={this.state.user.phoneNumber.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setPhoneNumber}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row> 
                        <Form.Group
                            controlId="AddressLine1Group"
                            as={Col}
                            md="12"
                        >
                            <Form.Label>Address Line 1 <span style={{color:"red", fontSize:"small"}}>{this.state.user.address1.error? "Enter a valid address line 1":""}</span></Form.Label>
                            <Form.Control
                                required
                                value={this.state.user.address1.value}
                                type="text"
                                placeholder="Enter Address Line 1"
                                className={this.state.user.address1.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setAddress1}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            controlId="AddressLine2Group"
                            as={Col}
                            md="12"
                        >
                            <Form.Label>Address Line 2 <span style={{color:"red", fontSize:"small"}}>{this.state.user.address2.error? "Enter a valid address line 2":""}</span></Form.Label>
                            <Form.Control
                                required
                                value={this.state.user.address2.value}
                                type="text"
                                placeholder="Address Line 2"
                                className={this.state.user.address2.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setAddress2}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            controlId="CityGroup"
                            as={Col}
                            md="12"
                        >
                            <Form.Label>City <span style={{color:"red", fontSize:"small"}}>{this.state.user.city.error? "Enter a valid city":""}</span></Form.Label>
                            <Form.Control
                                required
                                value={this.state.user.city.value}
                                type="text"
                                placeholder="Enter City"
                                className={this.state.user.city.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setCity}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            controlId="StateGroup"
                            as={Col}
                            md="12"
                        >
                            <Form.Label>State <span style={{color:"red", fontSize:"small"}}>{this.state.user.state.error? "Enter a valid state":""}</span></Form.Label>
                            <Form.Control
                                required
                                value={this.state.user.state.value}
                                type="text"
                                placeholder="Enter State"
                                className={this.state.user.state.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setUserState}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            controlId="ZipGroup"
                            as={Col}
                            md="12"
                        >
                            <Form.Label>Zip <span style={{color:"red", fontSize:"small"}}>{this.state.user.zip.error? "Enter a valid zip":""}</span></Form.Label>
                            <Form.Control
                                required
                                value={this.state.user.zip.value}
                                type="text"
                                placeholder="Enter Zip"
                                className={this.state.user.zip.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setZip}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Modal>)
    }
}

export default AddNewAddress;