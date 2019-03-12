import React from 'react';
import { Container, Button,
         CardColumns, Card } from 'react-bootstrap';
import firebase from '../../firebase.js';



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
              <Card.Img variant="top" src={this.props.imgSrc}/>
              <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                  {this.props.description}
                </Card.Text>
                <Button variant="primary">{this.props.title}</Button>
              </Card.Body>
          </Card>        
        );

    }




}