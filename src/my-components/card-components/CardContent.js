import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button,
         CardColumns, Card } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';



//https://blog.bitsrc.io/building-a-todo-app-in-react-with-firebase-and-redux-ba3ab53a671b

export class CardContent extends React.Component{

    render(){
        return(
        <Card>
            <Card.Img variant="top" src={this.props.default_img}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>        

        );

    }




}