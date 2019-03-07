import React from 'react';
import ReactDOM from 'react-dom';
import {
  Container, Row, Col,
  Navbar, Nav, NavDropdown,
  Form, FormControl, Button, 
  Jumbotron, Image, Table,
  CardColumns, Card
} from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

export class MyBio extends React.Component{
    render(){
        return(
            <Jumbotron id="my_bio">
            <Container>
              <Row>
                <Col md={3} sm={3} xs={12}>
                <Image fluid src={this.props.default_img} roundedCircle />
                </Col>
                <Col md={9} sm={9}>
                  <p>
                    Blah blah blah mock up text for this bio or something. This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                  </p>
                </Col>
              </Row>
              
                
            </Container>
            </Jumbotron>

        );
    }

}
