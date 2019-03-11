import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button,
         CardColumns, Card } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import {CardContent} from './card-components/CardContent';
import firebase from '../firebase.js';



export class MyPortfolio extends React.Component{
    constructor(props){
      super(props);
      this.state = { 
        projects: [],     
      }
    }

    //Object.keys(snap.val())]
    componentDidMount(){
      const rootRef = firebase.database().ref().child("data");
      const projectsRef = rootRef.child("projects");
      
      projectsRef.on('value', (snap) => {
            this.setState({
                        //Object.values returns arrays with the object values
            projects: [Object.values(snap.val())],
          });
      });
    }

    renderProjects(){
      //This needs to be an array not an object
      console.log(this.state.projects);
      
      //TODO: Some Renaming at some point
      return(
        <CardColumns>
            <Container>
              {this.state.projects.map(
                (card, index) => (
                  <CardContent 
                    key = {[index]}
                    
                    title={card[index].title}
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
