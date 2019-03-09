//Imports
import React, { Component } from 'react';
import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {Container} from 'react-bootstrap';
//import { GoMarkGithub } from 'react-icons/go';

import {MyNavbar} from './my-components/MyNavbar.js';
import {MyBio} from './my-components/MyBio.js';
import {MyPortfolio} from './my-components/MyPortfolio.js';



var default_img = "https://avatars0.githubusercontent.com/u/9421693?s=460&v=4";
//the App
export default class App extends Component {
  render() {
    return (
      //<MyNavbar default_image={default_img}/>
      //<MyPortfolio default_img={default_img}/>
          
      <Container fluid id="main_container">        
          
          
          
           

            <MyBio default_img={default_img}/>

           


      </Container>
    );//End of main_container
  }
}
