import React from 'react';
import { Modal } from './index';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Col, Form } from 'react-bootstrap';
import styles from '../css/components/login.css';
import validate from '../utils/validations';

const cx = classNames.bind(styles);

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                firstName: {
                    value: "",
                    error: null
                },
                lastName: {
                    value: "",
                    error: null
                },
                phoneNumber: {
                    value: "",
                    error: null
                },
                password: {
                    value: "",
                    error: null
                },
                email: {
                    value: "",
                    error: null
                },
                confirmPassword: {
                    value: "",
                    error: null
                }
            },
            valid: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setPhoneNumber = this.setPhoneNumber.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.checkConfirmPassword = this.checkConfirmPassword.bind(this);
    }

    setFirstName(e) {
        let newState = Object.assign({}, this.state);
        newState.user.firstName.value = e.target.value;
        newState.user.firstName.error = validate.name(e.target.value)
        this.setState(newState);
    }

    setLastName(e) {
        let newState = Object.assign({}, this.state);
        newState.user.lastName.value = e.target.value;
        newState.user.lastName.error = e.target.value == ""?false : validate.name(e.target.value)
        this.setState(newState);
    }

    setEmail(e) {
        let newState = Object.assign({}, this.state);
        newState.user.email.value = e.target.value;
        newState.user.email.error = validate.email(e.target.value)
        this.setState(newState);
    }

    setPhoneNumber(e) {
        let newState = Object.assign({}, this.state);
        newState.user.phoneNumber.value = e.target.value;
        newState.user.phoneNumber.error = validate.phoneNumber(e.target.value)
        this.setState(newState);
    }

    setPassword(e) {
        let newState = Object.assign({}, this.state);
        newState.user.password.value = e.target.value;
        newState.user.password.error = validate.pass(e.target.value)
        this.setState(newState);
    }

    checkConfirmPassword(e) {
        let newState = Object.assign({}, this.state);
        newState.user.confirmPassword.value = e.target.value;
        newState.user.confirmPassword.error = e.target.value != this.state.user.password.value
        this.setState(newState);
    }

    handleSubmit(e) {
        if(Object.keys(this.state.user).every(v=>this.state.user[v].error === false))
            this.props.handleSubmit(this.state.user);
    }

    render() {
        return (
            <Modal
                handleModalClose={this.props.handleModalClose}
                show={this.props.show}
                title="Register"
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
                            controlId="FirstNameGroup"
                        >
                            <Form.Label>First Name <span style={{color:"red", fontSize:"small"}}>{this.state.user.firstName.error? "Enter a valid first name":""}</span></Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter First Name"
                                className={this.state.user.firstName.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setFirstName}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            controlId="LastNameGroup"
                            as={Col}
                            md="12"
                        >
                            <Form.Label>Last Name <span style={{color:"red", fontSize:"small"}}>{this.state.user.lastName.error? "Enter a valid last name":""}</span></Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Last Name"
                                className={this.state.user.lastName.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setLastName}
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
                                type="text"
                                placeholder="Enter Phone Number"
                                className={this.state.user.phoneNumber.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setPhoneNumber}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group
                            controlId="EmailGroup"
                            as={Col}
                            md="12"
                        >
                            <Form.Label>Email <span style={{color:"red", fontSize:"small"}}>{this.state.user.email.error? "Enter a valid email":""}</span></Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Enter Email"
                                className={this.state.user.email.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setEmail}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group
                            controlId="PasswordGroup"
                            as={Col}
                            md="12"
                        >
                            <Form.Label>Password <span style={{color:"red", fontSize:"small"}}>{this.state.user.password.error? "Password must be min. 8 characters including atleast 1 character and one number":""}</span></Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Enter Password"
                                className={this.state.user.password.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.setPassword}
                            >
                            </Form.Control>
                        </Form.Group>
                        <Form.Group
                            controlId="ConfirmPasswordGroup"
                            as={Col}
                            md="12"
                        >
                            <Form.Label>Confirm Password <span style={{color:"red", fontSize:"small"}}>{this.state.user.confirmPassword.error? "Password does not match":""}</span></Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Confirm Password"
                                className={this.state.user.confirmPassword.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                                onChange={this.checkConfirmPassword}
                            >
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                </Form>
                <div className={cx('login-register-link')}>
                    <a onClick={this.props.switchModal} className={cx('register-link')}><span>Login?</span></a>
                </div>
            </Modal>)
    }
}

Register.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    switchModal: PropTypes.func
}

export default Register;