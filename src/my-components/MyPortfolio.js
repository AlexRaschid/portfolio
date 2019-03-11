import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button,
         CardColumns, Card } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {CardContent} from './card-components/CardContent';


export class MyPortfolio extends React.Component{
    constructor(props){
      super(props);
      this.state = { //V Insert Card Data here
        card_info: [{props},{props},{props}],
      }
    }

    renderProject(){
      return(
        <CardContent default_img={this.props.default_img}/>
      );
    }


    renderPortfolio(){
      
      return(
        <CardColumns>
            <Container>
              {this.state.card_info.map(
                (card) => (
                  
                  <CardContent 
                    key = { [1,2,3] }
                    default_img={card.props.default_img}
                  />
                ))
              }
            </Container> 
          </CardColumns>
      );
    }


    render(){
        return(
            this.renderPortfolio()

        );
    }

}
