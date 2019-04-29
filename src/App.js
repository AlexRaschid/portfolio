//Imports
import React, { Component  } from 'react';
import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Container, Button, Col, Row} from 'react-bootstrap';
import {MyNavbar} from './my-components/MyNavbar.js';
import {MyBio} from './my-components/MyBio.js';
import {MyPortfolio} from './my-components/MyPortfolio.js';
import {MyResumeCV} from './my-components/MyResumeCV.js';
import {MyContact} from './my-components/MyContact.js';



//the App
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPortfolio: true ? true: false,
      showResumeCV: false,
      showContact: false
    };

    // This binding is necessary to make `this` work in the callback
    this.renderPortfolio = this.renderPortfolio.bind(this);
    this.renderResumeCV = this.renderResumeCV.bind(this);
    this.renderContact = this.renderContact.bind(this);
  }


  renderPortfolio(){
    console.log("Portfolio clicked!");
    this.setState({
      showPortfolio: !this.state.showPortfolio,
      showResumeCV: false,
      showContact: false,
    })

  }

  renderResumeCV(){
    console.log("ResumeCV clicked!");
    this.setState({
      showPortfolio: false,
      showResumeCV: !this.state.showResumeCV,
      showContact: false,
    })

  }
  renderContact(){
    console.log("Contact clicked!");
    this.setState({
      showPortfolio: false,
      showResumeCV: false,
      showContact: !this.state.showContact,
    })

  }
  
  
  
  render() {
    return (
      //<MyNavbar default_image={default_img}/>
      //<MyPortfolio default_img={default_img}/>
      //ToDO: Two other tabs, 3 total, that are my contact and resume/cd  
        //ToDo: Make Buttons uniform color/ menuButtons to have portfolio as preselected  
      <Container fluid id="main_container">        
      
            <MyBio/>
            
            <Row id="menuBar">

              <Col md={4} sm={4} xs={4} className="menuBarButton">
                <Button onClick={this.renderPortfolio} variant="outline-dark" className="MyButton">Portfolio</Button>
              </Col>
              <Col md={4} sm={4} xs={4} className="menuBarButton">
                <Button onClick={this.renderResumeCV} variant="outline-dark" className="MyButton">Resume/CV</Button>
              </Col>
              <Col md={4} sm={4} xs={4} className="menuBarButton">
                <Button onClick={this.renderContact} variant="outline-dark" className="MyButton">Contact</Button>
              </Col>

            </Row>

            <Row id="displayPortfolio">
            { this.state.showPortfolio ? <MyPortfolio/> : null }
            </Row>

            <Row id="displayResumeCV">
              { this.state.showResumeCV ? <MyResumeCV/> : null }
            </Row>
            
            <Row id="displayContact">
              { this.state.showContact ? <MyContact/> : null }
            </Row>

            
            
            

            

           


      </Container>
    );//End of main_container
  }
}
