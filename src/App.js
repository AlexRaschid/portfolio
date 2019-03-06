//Imports
import React, { Component } from 'react';
import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {
  Container, Row, Col,
  Navbar, Nav, NavDropdown,
  Form, FormControl, Button, 
  Jumbotron, Image, Table,
  CardColumns, Card
} from 'react-bootstrap';


var default_img = "https://avatars0.githubusercontent.com/u/9421693?s=460&v=4";
//the App
class App extends Component {
  render() {
    return (

      <Container fluid id="main_container">        
          
          
          
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

          
          
          
          
          <Jumbotron id="my_bio">
          <Container>
            <Row>
              <Col md={3} sm={3} xs={12}>
              <Image fluid src={default_img} roundedCircle />
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




          <CardColumns>
            <Container>
              <Card>
                <Card.Img variant="top" src={default_img}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>


              <Card>
                <Card.Img variant="top" src={default_img}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card>
                <Card.Img variant="top" src={default_img}/>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Container>
            
          </CardColumns>



      </Container>
    );//End of main_container
  }
}

export default App;
