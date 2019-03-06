//Imports
import React, { Component } from 'react';
import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {
  Container, Row, Col,
  Navbar, Nav, NavDropdown,
  Form, FormControl, Button, 
  Jumbotron
} from 'react-bootstrap';

//the App
class App extends Component {
  render() {
    return (

      <Container fluid id="main_container">        
          
          
          <Container fluid id="nav_container">
            <Navbar bg="light" expand="lg">
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
            </Navbar>
          </Container>
          
          
          
          <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
            </p>
          </Container>
          </Jumbotron>



      </Container>
    );//End of main_container
  }
}

export default App;
