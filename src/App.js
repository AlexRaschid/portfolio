//Imports
import React, { Component  } from 'react';
import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Container, Button, Col, Row} from 'react-bootstrap';
//import { GoMarkGithub } from 'react-icons/go';

import {MyNavbar} from './my-components/MyNavbar.js';
import {MyBio} from './my-components/MyBio.js';
import {MyPortfolio} from './my-components/MyPortfolio.js';



var default_img = "https://avatars3.githubusercontent.com/u/9421693?s=400&u=71ab55e0bb4775a84bddbf214880dd7ebec78430&v=4";
//the App
export default class App extends Component {
  render() {
    return (
      //<MyNavbar default_image={default_img}/>
      //<MyPortfolio default_img={default_img}/>
      //ToDO: Add Default dropdown to display projects, but have two other tabs, 3 total, that are my contact and resume/cd    
      <Container fluid id="main_container">        
          
          
          
           

            <MyBio default_img={default_img}/>
            
            <Row id="menuBar">

              <Col className="menuBarButton">
                <Button variant="outline-dark" className="MyButton">Portfolio</Button>
              </Col>
              <Col className="menuBarButton">
                <Button variant="outline-dark" className="MyButton">Resume/CV</Button>
              </Col>
              <Col className="menuBarButton">
                <Button variant="outline-dark" className="MyButton">Contact</Button>
              </Col>

            </Row>
            
            

            <MyPortfolio default_img={default_img} />

           


      </Container>
    );//End of main_container
  }
}
