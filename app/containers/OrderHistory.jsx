import React from 'react';
import styles from 'css/components/orderhistory';
import classNames from 'classnames/bind';
import { Table, Row, Container } from 'react-bootstrap';




//const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const cx = classNames.bind(styles);
const OrderHistory = () => {

    return (

<Container className={cx('flex-style')}>
        <Row>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>Order Number</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Order Date</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>111</td>
                        <td>Iphone XS</td>
                        <td>1200$</td>
                        <td>@mdo</td>
                        <td>Delivered</td>
                    </tr>
                    <tr>
                        <td>111</td>
                        <td>Iphone XS</td>
                        <td>1200$</td>
                        <td>@mdo</td>
                        <td>Delivered</td>
                    </tr>

                </tbody>
            </Table>
        </Row>
        </Container>



    );
};

export default OrderHistory;
