import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';
import styles from '../css/components/profile.css';
import { Col} from 'react-bootstrap';
import {BreadcrumbFn , Addressbook}  from '../components';
const cx = classNames.bind(styles);

const Profile = ({ }) => <React.Fragment>
    <BreadcrumbFn></BreadcrumbFn> 
    <Addressbook></Addressbook>
    </React.Fragment>;

Profile.propTypes = {

}

export default Profile;