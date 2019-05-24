import React from 'react';
import Page from './Page';
import Addresses from '../containers/Addresses';

const Addressbook = ({...props}) => (
    <Page>
        <Addresses {...props}></Addresses>
    </Page>
);

export default Addressbook;