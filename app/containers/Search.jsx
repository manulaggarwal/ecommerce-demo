import React from 'react';
import PropTypes from 'prop-types';
import Input from '../components/TopicTextInput';
import classNames from 'classnames/bind';
import styles from '../css/components/search.css';

const cx = classNames.bind(styles);

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width:"100%"}} className="form-check">
                <Input className= {cx("form-control", "form-custom-control")} placeholder="Search Here..."></Input>
                <button className={cx('search-icon-button-pos')}>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        );
    }
}

Search.propTypes = {

}

export default Search;