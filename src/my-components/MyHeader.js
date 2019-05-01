import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import { Row, Col, Image, Button } from 'react-bootstrap';

import firebase from '../firebase.js';




export class MyHeader extends React.Component{
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
                <h1>My Header</h1>
                <Row>
                    <p>Hi</p>
                    
                </Row>
              </Container>

        );
    }

}
