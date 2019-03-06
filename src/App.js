//Imports
import React, { Component } from 'react';
import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {
  Container, Row, Col,
  Navbar, Nav, NavDropdown,
  Form, FormControl, Button, 
  Jumbotron, Image
} from 'react-bootstrap';

//the App
class App extends Component {
  render() {
    return (

      <Container fluid id="main_container">        
          
          
          
            <Navbar bg="light" expand="lg">
            <Container fluid id="nav_container">
              <Navbar.Brand href="#home">Potential Image</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto navbar-right navbarItems">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>

          
          
          
          
          <Jumbotron>
          <Container>
            <Row>
              <Col md={3}>
              <Image fluid src="https://avatars0.githubusercontent.com/u/9421693?s=460&v=4" roundedCircle />
              </Col>
              <Col md={9}>
                <p>
                  Blah blah blah mock up text for this bio or something. This is a modified jumbotron that occupies the entire horizontal space of
                  its parent.
                </p>
              </Col>
            </Row>
            
              
          </Container>
          </Jumbotron>



      </Container>
    );//End of main_container
  }
}

export default App;
