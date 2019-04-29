import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import {CardContent} from './portfolio-components/CardContent';
import firebase from '../firebase.js';


//Firebase References for the realtime-db and storage
const rootRef = firebase.database().ref().child("data");
const projectsRef = rootRef.child("projects");


export class MyPortfolio extends React.Component{
    constructor(props){
      super(props);
      this.state = { 
        projects: [],
        images: [],   
      }
    }

    
    componentDidMount(){
      projectsRef.on('value', (snap) => {
        console.log(Object.keys(snap.val())); //Projects name in db   
        this.setState({               
            projects: Object.values(snap.val()), //Object.values - returns arrays with the object values
            pathNames: Object.keys(snap.val()), //Object.keys(snap.val()) - returns an array of a given object's own property names
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
                (project, index) => ( 
                  <CardContent key = {project.id} 
                               project={project}
                               pathNames={this.state.pathNames}
                               pathIndex={index}
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
