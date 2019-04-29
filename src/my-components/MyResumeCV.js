import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Document, Page } from 'react-pdf';

import firebase from '../firebase.js';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
export class MyResumeCV extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1,
            scale: 1.0,
            
        }
        console.log(this.state);
        this.onDocumentLoad = this.onDocumentLoad.bind(this)
    }

    onDocumentLoad ({ numPages }) {
        this.setState({ numPages })
      }
    
    componentWillMount(){
        //ToDo: Add CORS proxy to fiew the pdf file 
        firebase.storage().ref("pdfs/")//gets pdf from firebase
                          .child(`MyResume.pdf`)
                          .getDownloadURL()
                          .then((url) => {
            console.log(url);
            this.state.MyResume = url;
            this.setState(this.state);
        });
    }
    
    render(){
        return(
            <Container>
                <Row>
                    <Col md={9} sm={9} xs={12}>
                            <Row>
                                <Col md={6} sm={6} xs={12}>
                                    <Button id="dlResume">Download Resume</Button>
                                </Col>
                                <Col md={6} sm={6} xs={6}>
                                    <Button id="dlCV">Download CV</Button>
                                </Col>
                            </Row>
                    </Col>
                    <Col md={3} sm={3} xs={12}>
                        <Document file={this.state.MyResume}
                                onDocumentLoad={this.onDocumentLoad}>
                            <Page
                                pageNumber={this.state.pageNumber}
                                onLoadSuccess={this.onPageLoad}
                                scale={this.state.scale}
                            />
                        
                        </Document>
                    </Col>
                    
                </Row>
            </Container>
        );
    }
}