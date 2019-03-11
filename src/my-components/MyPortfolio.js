import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button,
         CardColumns, Card } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {CardContent} from './card-components/CardContent';


export class MyPortfolio extends React.Component{
    constructor(props){
      super(props);
    }


    renderCard(){
      return(
        <CardContent default_img={this.props.default_img}/>
      );





    }



    render(){
        return(
            <CardColumns>
            <Container>
              
              {this.renderCard()}
              

            </Container>
            
          </CardColumns>

        );
    }

}
