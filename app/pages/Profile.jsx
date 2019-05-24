import React from 'react';
import Page from './Page';
import Addresses from '../containers/Addresses';

const Profile = ({...props}) => (
    <Page>
        <Addresses {...props}></Addresses>
    </Page>
);

export default Profile;