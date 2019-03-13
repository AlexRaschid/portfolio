import React from 'react';
import { Container, Button,
         CardColumns, Card } from 'react-bootstrap';
import {CardContent} from './card-components/CardContent';
import firebase from '../firebase.js';


const rootRef = firebase.database().ref().child("data");
const projectsRef = rootRef.child("projects");

// Add /projects/ when testing to see if the loop has stopped/ get images
const storage = firebase.storage().ref("images")



export class MyPortfolio extends React.Component{
    constructor(props){
      super(props);
      this.state = { 
        projects: [],     
      }
    }

    //Object.keys(snap.val())  returns an array of a given object's own property names
    componentWillMount(){
      projectsRef.on('value', (snap) => {
        console.log(Object.keys(snap.val())); //Projects name in db   
        this.setState({
       //Object.values returns arrays with the object values
            projects: Object.values(snap.val()),
            pathNames: Object.keys(snap.val()),
          });
      });
    }

    getImage (image) {
      storage.child(`${image}.jpg`).getDownloadURL().then((url) => {
       
       this.state[image] = url;
       setTimeout(console.log(url), 1200);
       console.log(this.state[image]);
       this.setState(this.state);
     }).catch(e=> {})
     ;
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
                              title={project.title}
                              description={project.description}
                              imgSrc={this.getImage(this.state.pathNames[index])}/>
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
