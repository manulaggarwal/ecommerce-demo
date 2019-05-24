import React from 'react';
import PropTypes from 'prop-types';
import {Login, Register} from '../components';
import { connect } from 'react-redux';
import {login, register} from '../actions/users';
class LoginRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            type: props.type
        };
        this.switchModal = this.switchModal.bind(this);
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
    }

    handleLoginSubmit(data) {
        const {login} = this.props;
        login(data);
    }

    handleRegisterSubmit(data) {
        const {register} = this.props
        let user = {};
        Object.keys(data).map(v=>{v!=='confirmPassword'?user[v]=data[v].value:null});
        register(user);
    }

    renderLogin() {
        return <Login
                    show={this.state.show}
                    handleModalClose={this.props.close}
                    switchModal={this.switchModal}
                    handleSubmit={this.handleLoginSubmit}
                ></Login>
    }

    renderRegistration() {
        return <Register
                    show={this.state.show}
                    handleModalClose={this.props.close}
                    switchModal={this.switchModal}
                    handleSubmit={this.handleRegisterSubmit}
                ></Register>
    }

    switchModal() {
        this.setState({
            type: this.state.type === "login"? "register": "login"
        })
    }

    componentDidMount() {
        this.setState({
            show: true
        })
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isLogin) {
            this.setState({
                show: false
            })
        }
    }

    render() {
        return this.state.type === "login"? this.renderLogin() : this.renderRegistration(); 
    }
}
    
LoginRegister.propTypes = {
    type: PropTypes.string.isRequired
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.login
    }
}

export default connect(mapStateToProps, {login, register})(LoginRegister);