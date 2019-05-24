import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from '../css/components/topic-item';

const cx = classNames.bind(styles);

const TotalPrice = ({}) => {
  return (
    <div>
      Total Price: € 50
    </div>
    
  );
};

TotalPrice.propTypes = {

};

export default TotalPrice;
