import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/orderconfirmation.css';

import { Row, Col, Card, ProgressBar} from 'react-bootstrap';
import { BreadcrumbFn, OrderConfirmed} from '../components';

const cx = classNames.bind(styles);


class OrderConfirmation extends React.Component {
    render() {
        return (<div>
        <BreadcrumbFn></BreadcrumbFn> 
          
        <Row>
            <Col>
                <OrderConfirmed></OrderConfirmed> 
            </Col>
        </Row>
    </div>)
    }

}


OrderConfirmation.propTypes = {

}

export default OrderConfirmation;