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



var default_img = "https://avatars3.githubusercontent.com/u/9421693?s=400&u=71ab55e0bb4775a84bddbf214880dd7ebec78430&v=4";
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
      
            <MyBio default_img={default_img}/>
            
            <Row id="menuBar">

              <Col className="menuBarButton">
                <Button onClick={this.renderPortfolio} variant="outline-dark" className="MyButton">Portfolio</Button>
              </Col>
              <Col className="menuBarButton">
                <Button onClick={this.renderResumeCV} variant="outline-dark" className="MyButton">Resume/CV</Button>
              </Col>
              <Col className="menuBarButton">
                <Button onClick={this.renderContact} variant="outline-dark" className="MyButton">Contact</Button>
              </Col>

            </Row>

            <Row id="brDisplay">
            { this.state.showPortfolio ? <MyPortfolio default_img={default_img} /> : null }
            { this.state.showResumeCV ? <MyResumeCV default_img={default_img} /> : null }
            { this.state.showContact ? <MyContact default_img={default_img} /> : null }
            </Row>

            
            
            

            

           


      </Container>
    );//End of main_container
  }
}
