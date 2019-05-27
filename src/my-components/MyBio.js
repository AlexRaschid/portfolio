import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import { Row, Col, Image, Button } from 'react-bootstrap';

import firebase from '../firebase.js';




export class MyBio extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    
    componentDidMount(){
        //ToDo: Pass db file info from props and not hardcoded
        //gets pic from firebase
        firebase.storage().ref("images/other/")
                          .child(`MyMainPic.jpg`)
                          .getDownloadURL()
                          .then((url) => {
            this.state.MyMainPic = url;
            this.setState(this.state);

        });
    }
    
    render(){
        //ToDo: Replace this.props.default_img with actual main picture
        //ToDo: Feed Bio in from db?
        return(
            
              <Container>
                  <h1>About Me</h1>
                    <Row>
                        <Col md={3} sm={3} xs={5}>
                            <Image fluid src={this.state.MyMainPic} roundedCircle />
                        </Col>
                        <Col md={9} sm={9} xs={7}>
                            <Row>
                                <Row>
                                    <h2>Hi, I'm Alexander Raschid</h2>
                                </Row>
                                <Row>
                                    <p id="myBio">
                                        Aspiring Web Developer and Full-Time College Student from NYC.
                                    </p>
                                    <p>Ive been coding since 13 and I'm not stopping anytime soon.</p>
                                </Row>

                            </Row>
                        </Col>
                    </Row>
                
              </Container>
            

        );
    }

}
