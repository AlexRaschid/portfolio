import React from 'react';
import './MyRow.css';
import ReactDOM from 'react-dom';
import { Row, Col, Image, Button } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

export class MyRow extends React.Component{
    render(){
        return(
            <Row>
                <Col md={3} sm={3} xs={5}>
                <Image fluid src={this.props.default_img} roundedCircle />
                    <Row>
                       
                    </Row>  
                </Col>
                <Col md={9} sm={9} xs={7}>
                    <Row>
                        <p id="myBio">
                            Hello! My name is Alexander Raschid and this is my portfolio webpage.
                            Ive been coding for 4 years and im currently  in my Freshmen Year at CUNY Brooklyn College
                        </p>
                    </Row>
                    <Row>
                        <Col className='bioButtons' xs={6}>
                            <Button variant="outline-dark" href="www.github.com/alexraschid">Link</Button>
                        </Col>
                        <Col variant="outline-dark"className='bioButtons' xs={6}>
                            <Button variant="outline-dark">Resume</Button>
                        </Col >
                    </Row>
                
                </Col>
            </Row>

        );
    }

}

