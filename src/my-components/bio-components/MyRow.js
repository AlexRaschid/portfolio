import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Image } from 'react-bootstrap';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

export class MyRow extends React.Component{
    render(){
        return(
            <Row>
                <Col md={3} sm={3} xs={12}>
                <Image fluid src={this.props.default_img} roundedCircle />
                </Col>
                <Col md={9} sm={9}>
                <p>
                    Blah blah blah mock up text for this bio or something. This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
                </Col>
            </Row>

        );
    }

}

