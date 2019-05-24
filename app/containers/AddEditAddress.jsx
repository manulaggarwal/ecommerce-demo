import React from 'react';
import PropTypes from 'prop-types';
import {AddNewAddress, EditAddress} from '../components';

class AddEditAddress extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            show: false,
            type: props.type
        };
        this.renderEditAddress = this.renderEditAddress.bind(this);
    }

    renderAddNewAddress() {
        return <AddNewAddress
                    show={this.state.show}
                    handleModalClose={this.props.close}
                    handleSubmit={this.props.addEditAddress}
                ></AddNewAddress>
    }

    renderEditAddress() {
        return <AddNewAddress
                    show={this.state.show}
                    handleModalClose={this.props.close}
                    address={this.props.data}
                    handleSubmit={this.props.addEditAddress}
                ></AddNewAddress>
    }

    

    componentDidMount() {
        this.setState({
            show: true
        })
    }

    render() {
        return this.state.type === "add"? this.renderAddNewAddress() : this.renderEditAddress(); 
    }
}


    
AddEditAddress.propTypes = {
    type: PropTypes.string.isRequired
}

export default AddEditAddress;