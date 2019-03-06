import React, { Component } from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';

class App extends Component {
  render() {
    return (

      <Container>
        <Row>
          <Col>1of3</Col>
          <Col>2of3</Col>
          <Col>3of3</Col>
        </Row>
      </Container>
    );
  }
}

export default App;
