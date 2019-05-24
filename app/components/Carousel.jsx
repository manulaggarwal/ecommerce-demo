import React from 'react';
import {Carousel, Image} from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from '../css/components/carousel.css';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

const HomeCarousel = ({...props}) => props.data && Array.isArray(props.data)? ( <Carousel > 
    {
        props.data.map((v,i)=><Carousel.Item key={i} >
            <Image
                src={v.image}
                alt={v.alt||'Image Alt'}
                fluid
            />
        </Carousel.Item>)
    }
</Carousel>
) : null;

HomeCarousel.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        alt: PropTypes.string
    })).isRequired
}

export default HomeCarousel;