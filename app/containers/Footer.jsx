import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router';
import {Navbar,Image,Row,Col,CardGroup,Card, small,Container} from 'react-bootstrap';
import styles from 'css/components/footer';
import { BackToTop } from '../components';


const cx = classNames.bind(styles);

const Footer = ({})=> <React.Fragment>

   <div className={cx('flex-style')}> 
    <CardGroup  >
  <Card>
    
    <Card.Body>
      <Card.Title>About</Card.Title>
      <Card.Text>
        Click here to know more about us.
        
      </Card.Text>
      <Link to="/about">About</Link>
    </Card.Body>
    
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Help</Card.Title>
      <Card.Text>
      In case of any issues feel free to contact us..{' '}
      </Card.Text>
      <Link to="/ContactUs">Contact Us</Link>
    </Card.Body>
    
  </Card>
  <Card>
    
    <Card.Body>
      <Card.Title>Social</Card.Title>
      <Card.Text>
      Follow us on:{' '}
      </Card.Text>
      <i className="fab fa-facebook fa-2x" style={{marginRight: "20px", color:"blue"}}></i>
      <i className="fab fa-twitter-square fa-2x" style={{marginRight: "20px", color:"lightskyblue"}}></i>
      <i className="fab fa-instagram fa-2x" style={{color:"black"}}></i>
    </Card.Body>
    
  </Card>
</CardGroup>

<BackToTop scrollStepInPx="100" delayInMs="16.66" />
</div>

</React.Fragment>

Footer.propTypes={

}


export default Footer