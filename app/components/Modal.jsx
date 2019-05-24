import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import styles from '../css/components/modal.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const modal = ({ ...props }) => (
    <div className={cx('modal-custom-content')}>
    <Modal show={props.show} onHide={props.handleModalClose} >
        <Modal.Header className={cx('modal-custom-header')}>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
        <Modal.Footer className={cx('modal-custom-footer')}>
            <button className={cx("btn", "global-secondary-button")} onClick={props.handleModalClose}>Close</button>
            <button className={cx("btn", "global-primary-button")} onClick={props.handleSubmit}>Submit</button>
        </Modal.Footer>
    </Modal>
    </div>)
 

modal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleModalClose: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    title: PropTypes.string
}

export default modal;