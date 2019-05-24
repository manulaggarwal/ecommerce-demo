import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBar } from 'react-bootstrap';
import classNames from 'classnames/bind';
import styles from '../css/components/checkout';

const cx = classNames.bind(styles);

const Progress = ({...props})=> <React.Fragment>
<ProgressBar className={cx('checkout-progressbar')} now={props.percentage} />
 </React.Fragment>



export default Progress

