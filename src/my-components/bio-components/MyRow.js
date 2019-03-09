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
                        <p>
                            Hey im Alex and This is my portfolio website
                        </p>
                    </Row>
                    <Row>
                        <Col className='bioButtons' xs={6}>
                            <Button href="www.github.com/alexraschid">Link</Button>
                        </Col>
                        <Col className='bioButtons' xs={6}>
                            <Button>Resume</Button>
                        </Col >
                    </Row>
                
                </Col>
            </Row>

        );
    }

}

