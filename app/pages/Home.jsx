import React from 'react';
import Page from './Page';
import HomePage from '../containers/Homepage';

const Home = ({...props}) => (
    <Page>
        <HomePage {...props}></HomePage>
    </Page>
);

export default Home;