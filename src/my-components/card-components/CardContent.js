import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Button,
         CardColumns, Card } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';



//https://blog.bitsrc.io/building-a-todo-app-in-react-with-firebase-and-redux-ba3ab53a671b

export class CardContent extends React.Component{
  constructor(props){
    super(props);
    //console.log(this.state.projects);
  }

    render(){
      console.log(this.props);

        return(
          <Card>
              <Card.Img variant="top" src={this.props.default_img}/>
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