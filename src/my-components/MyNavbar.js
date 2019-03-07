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

export class MyNavbar extends React.Component{
    render(){
        return(
        <Navbar id="my_navbar" fixed="top" expand="lg">
            <Container fluid id="nav_container">
               <Navbar.Brand href="#home">TODO: Add image</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto navbar-right navbarItems">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">TODO: Scroll to Portfolio</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        );
    }

}
