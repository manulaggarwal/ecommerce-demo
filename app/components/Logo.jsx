import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import { Image } from 'react-bootstrap';

const Logo = ({...props})=> {
    return props.href?(
        <Link to={props.href}>
            <Image {...props}></Image>
        </Link>
    ) :
    (
        <Image {...props}></Image>
    )
}

Logo.propTypes = {
    href : PropTypes.string,
    src : PropTypes.string.isRequired
}

export default Logo;