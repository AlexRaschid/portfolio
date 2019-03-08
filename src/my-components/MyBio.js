import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Jumbotron} from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {MyRow} from './bio-components/MyRow';

export class MyBio extends React.Component{
    render(){
        return(
            <Jumbotron id="my_bio">
              <Container>
                
              <MyRow default_img={this.props.default_img}/>             
                  
              </Container>
            </Jumbotron>

        );
    }

}
