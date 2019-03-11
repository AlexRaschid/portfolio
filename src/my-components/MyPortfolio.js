import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button,
         CardColumns, Card } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {CardContent} from './card-components/CardContent';


export class MyPortfolio extends React.Component{
    constructor(props){
      super(props);
      this.state = { //V Insert Project Data here
                      //TODO: Insert the firebase data for projects here
        projects: [{props},{props},{props}],
      }
    }

    renderProjects(){
      
      //TODO: Some Renaming at some point
      return(
        <CardColumns>
            <Container>
              {this.state.projects.map(
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
            this.renderProjects()

        );
    }

}
