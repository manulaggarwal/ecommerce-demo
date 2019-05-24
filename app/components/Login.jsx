import React from 'react';
import { Modal } from './index';
import classNames from 'classnames/bind';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../css/components/login.css';
import validate from '../utils/validations';

const cx = classNames.bind(styles);

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: {
                value: "",
                error: false
            },
            pass: {
                value: ""
            },
            valid: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setUserValue = this.setUserValue.bind(this);
        this.setUserPass = this.setUserPass.bind(this);
    }

    setUserPass(e) {
        this.setState({
            pass: {
                value: e.target.value
            }
        })
    }

    setUserValue(e) {
        this.setState({
            email: {
                value: e.target.value,
                error: validate.email(e.target.value)
            }
        })
    }

    handleSubmit(e) {
        if(!this.state.email.error && this.state.pass.value != "") {
            this.props.handleSubmit({
                email: this.state.email.value,
                password: this.state.pass.value
            });
        }
    }

    render() {
        return (
            <Modal
                handleModalClose={this.props.handleModalClose}
                show={this.props.show}
                title="Login"
                handleSubmit={this.handleSubmit}
            >
                <form>
                    <Form.Group
                        controlId="UserLoginEmailGroup"
                    >
                        <Form.Label>Email <span style={{color:"red", fontSize:"small"}}> {this.state.email.error? "Please enter valid email": ""} </span></Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Email"
                            className={this.state.email.error? cx("form-custom-control","form-error"):cx("form-custom-control")}
                            onChange={this.setUserValue}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Form.Group
                        controlId="UserLoginPassGroup"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Enter password"
                            className={cx("form-custom-control")}
                            onChange={this.setUserPass}
                        >
                        </Form.Control>
                    </Form.Group>
                </form>
                <div className={cx('login-register-link')}>
                    <a onClick={this.props.switchModal} className={cx('register-link')}><span>Register?</span></a>
                </div>
            </Modal>
        );
    }


}

Login.propTypes = {
    handleModalClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}

export default Login;