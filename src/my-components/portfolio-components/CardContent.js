import React from 'react';
import { Button, Card } from 'react-bootstrap';
import firebase from '../../firebase.js';

const storage = firebase.storage().ref("images/projects/")

export class CardContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  getImage (image) {
    storage.child(`${image}.jpg`).getDownloadURL().then((url) => { //gets the url
    console.log(url) 
    this.state.image = url; 
    console.log(this.state.image);
     this.setState(this.state); //sets state with new url
   }).catch(e=> {}) //Catch errors?
   ;
 }

  componentWillMount(){
    this.getImage(this.props.pathNames[this.props.pathIndex])
  }
  

    render(){
      console.log(this.state.image);
        return(
          <Card>
              <Card.Img variant="top" src={this.state.image}/>
              <Card.Body>
                <Card.Title>{this.props.project.title}</Card.Title>
                <Card.Text>
                  {this.props.project.description}
                </Card.Text>
                <Button src={this.props.project.repositoryURL} variant="primary">Github</Button>
              </Card.Body>
          </Card>        
        );
    }
}