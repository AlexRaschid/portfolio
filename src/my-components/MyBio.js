import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import { Row, Col, Image, Button } from 'react-bootstrap';
export class MyBio extends React.Component{
    render(){
        //ToDo: Replace this.props.default_img with actual main picture
        //ToDo: Feed Bio in from db?
        return(
            <Jumbotron id="my_bio">
              <Container>
                <Row>
                    <Col md={3} sm={3} xs={12}>
                        <Image fluid src="https://www.petmd.com/sites/default/files/small-kitten-walking-towards_127900829_0.jpg" roundedCircle />
                    </Col>
                    <Col md={9} sm={9} xs={12}>
                        <Row>
                            <p id="myBio">
                                Hello! My name is Alexander Raschid and this is my portfolio webpage.
                                Ive been coding for 4 years and im currently  in my Freshmen Year at CUNY Brooklyn College
                            </p>
                        </Row>
                    </Col>
                </Row>
              </Container>
            </Jumbotron>

        );
    }

}
