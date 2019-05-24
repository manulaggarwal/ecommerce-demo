import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Container } from 'react-bootstrap';
import {Link} from 'react-router';

const EditAddress = ({...props})=> {
    return ( 
        <Container> 
        <Form>
            <Form.Label>Add New Address</Form.Label>
            
            <Form.Row>
            
            <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder="Enter full name" />
            </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control placeholder="1511245678" />
            </Form.Group>
            </Form.Row>

            <Form.Group >
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                    <option>Choose...</option>
                    <option value="BW">Baden-Württemberg</option>
                    <option value="BY">Bavaria</option>
                    <option value="BE">Berlin</option>
                    <option value="BB">Brandenburg</option>
                    <option value="HB">Bremen</option>
                    <option value="HH">Hamburg</option>
                    <option value="HE">Hesse</option>
                    <option value="MV">Mecklenburg-Western Pomerania</option>
                    <option value="NI">Lower Saxony</option>
                    <option value="NW">North Rhine-Westphalia</option>
                    <option value="RP">Rhineland-Palatinate</option>
                    <option value="SL">Saarland</option>
                    <option value="SN">Saxony</option>
                    <option value="ST">Saxony-Anhalt</option>
                    <option value="SH">Schleswig-Holstein</option>
                    <option value="TH">Thuringia</option>	
                </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
                </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="&nbsp;&nbsp;&nbsp;Make this address as default" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Add address
            </Button>
            </Form>
            </Container>
    )    
}

EditAddress.propTypes = {
    
}

export default EditAddress;