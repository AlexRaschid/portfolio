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

    //Object.keys(snap.val())  returns an array of a given object's own property names
    componentDidMount(){
      const rootRef = firebase.database().ref().child("data");
      const projectsRef = rootRef.child("projects");
      
      projectsRef.on('value', (snap) => {
        console.log(Object.keys(snap.val())); //Projects name in db   
        this.setState({
       //Object.values returns arrays with the object values
            projects: Object.values(snap.val()),
          });
      });
    }

    renderProjects(){
      //TODO: Some Renaming at some point
      //.map Takes an array and iterates over it with a function
      //this.state.projects project objects
      //is an array inside an array [[{...},{...}]]
      //so index never increases past 0 since first array.length is 1
      return(
        <CardColumns>
            <Container>
              {this.state.projects.map(
                (project) => ( 
                  <CardContent key = {project.id} 
                              title={project.title}/>
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
