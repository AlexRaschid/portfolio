import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button,
         CardColumns, Card } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {CardContent} from './card-components/CardContent';
import firebase from '../firebase.js';

const projectsRef = firebase.database().ref("/projects/");


export class MyPortfolio extends React.Component{
    constructor(props){
      super(props);
      this.state = { //V Insert Project Data here
                      //TODO: Insert the firebase data for projects here
        projects: [],
        
      }
      console.log(this.projects);
    }

    componentDidMount(){
      projectsRef.on('value', (snapshot) => {
        console.log(snapshot.child("bathroom_finder/"));
        console.log("Where is this?");
          this.setState({
            projects: snapshot.val()
          });
      });
    }

    renderProjects(){
      
      //TODO: Some Renaming at some point
      return(
        <CardColumns>
            <Container>
              {this.state.projects.map(
                (card) => (
                  <CardContent 
                    key = { [1] }
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
