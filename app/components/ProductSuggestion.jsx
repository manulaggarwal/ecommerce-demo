import React from 'react';
import PropTypes from 'prop-types';
import { Carousel, Image, Row, Col } from 'react-bootstrap';

const ProductSuggestion = ({...props}) => {
  
  return (<React.Fragment>
  <h3>{props.title}</h3>
  <Carousel>
    {
      props.imageURLs.map((v,i)=>(
        <Carousel.Item key={i}>
          <Row>
          {v.map((p,k)=>(
            <Col md="3" key={k}>
              <Image style={{cursor:"pointer"}} onClick={()=>{props.handleClick(p)}} fluid src={p} />
            </Col>
          ))}
          </Row>
        </Carousel.Item>
      ))
    }
  </Carousel>
</React.Fragment>)}

ProductSuggestion.propTypes = {
  title: PropTypes.string.isRequired,
  imageURLs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  handleClick: PropTypes.func
}

export default ProductSuggestion

