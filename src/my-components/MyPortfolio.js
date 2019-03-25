import React from 'react';
import { Container,
         CardColumns } from 'react-bootstrap';
import {CardContent} from './portfolio-components/CardContent';
import firebase from '../firebase.js';


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

    //Object.keys(snap.val())  returns an array of a given object's own property names
    componentDidMount(){
      projectsRef.on('value', (snap) => {
        console.log(Object.keys(snap.val())); //Projects name in db   
        this.setState({
       //Object.values returns arrays with the object values
            projects: Object.values(snap.val()),
            pathNames: Object.keys(snap.val()),
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
