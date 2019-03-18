import React from 'react';
import { Container, Button,
         CardColumns, Card } from 'react-bootstrap';
import firebase from '../../firebase.js';
import APIS from '../APIS.js';



//https://blog.bitsrc.io/building-a-todo-app-in-react-with-firebase-and-redux-ba3ab53a671b

export class CardContent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  

    render(){
      console.log(this.props);

        return(
          <Card>
              <Card.Img variant="top" src={APIS.getImage(this.props.pathName[0])}/>
              <Card.Body>
                <Card.Title>{this.props.project.title}</Card.Title>
                <Card.Text>
                  {this.props.project.description}
                </Card.Text>
                <Button variant="primary">{this.props.project.title}</Button>
              </Card.Body>
          </Card>        
        );

    }




}