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
        console.log(Object.values(snap.val()));
        console.log(Object.values(snap.val())[0].title);
        console.log(Object.values(snap.val())[1]);
        console.log(Object.keys(snap.val())); //Projects name in db   
        this.setState({
                        //Object.values returns arrays with the object values
            projects: [Object.values(snap.val())],
          });
      });
    }

    renderProjects(){
      //This needs to be an array not an object
      console.log(this.state.projects);
      console.log(this.state.projects.title);
      //console.log(this.state.projects[0]);


      //                  console.log(project),
      //console.log(index),
                  
                  


      //TODO: Some Renaming at some point
      //.map Takes an array and iterates over it with a function
      //this.state.projects project objects
      //is an array inside an array [[{...},{...}]]
      //so index never increases past 0 since first array.length is 1
      return(
        <CardColumns>
            <Container>
              {this.state.projects.map(
                (project, index) => ( <CardContent 
                                        key = {project[index].id} 
                                        title={project[index].title}
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
