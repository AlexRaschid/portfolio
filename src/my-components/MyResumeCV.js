import React from 'react';
import {Container, Row} from 'react-bootstrap';
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
                    <Document file={this.state.MyResume}
                              onDocumentLoad={this.onDocumentLoad}>
                        <Page pageNumber={1} />
                    
                    </Document>
                </Row>
            </Container>
        );
    }
}