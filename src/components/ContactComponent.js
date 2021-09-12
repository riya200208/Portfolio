import React, { Component } from 'react';
import {Button, Label, Col, Row } from 'reactstrap';
import { Control, Form, Errors} from 'react-redux-form';
const required = (val) => val&& val.length;
const maxLength = (len) => (val)=>!(val) || (val.length <= len);
const minLength = (len) =>(val) =>val&&(val.length>=len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val)=>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(values) {
        // console.log("current state is : " + JSON.stringify(values));
        // alert("current state is : " + JSON.stringify(values));
    
        this.props.postFeedback(values);
        this.props.resetFeedbackForm();

        // event.preventDefault();

    }


    render() {

        return (
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-12 col-sm-2">
                    <hr className="text-danger border border-danger"/>
                    </div>
                    <div className="col-12 col-sm-2">
                   <h1>     Contact</h1>
                        </div>
                        
                        <div className="col-12 col-sm">
                        <hr className="text-danger border border-danger"/>
                        </div>
                        

                </div>
                <div className="row row-content">
                   
                    <div className="col-12 col-md-9">
                     <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group py-3">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control  border-danger text-white box-shadow-input"
                                        validators={{required, minLength:minLength(3), maxLength:maxLength(15) }}
                                    />
                                      <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required ',
                                            minLength: ' Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group py-3">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control border-danger box-shadow-input text-white"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                    />
                                      <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group py-3">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control border-danger box-shadow-input text-white" 
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}/>
                                            <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: '*Required',
                                            minLength: ' Must be greater than 2 numbers',
                                            maxLength: ' Must be 15 numbers or less',
                                            isNumber: ' Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group py-3 ">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control box-shadow-input border-danger  text-white" 
                                        validators={{
                                            required, validEmail
                                        }}/>
                                            <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: '*Required',
                                            validEmail: ' Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group py-3">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input bbox-shadow-input border-danger"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control box-shadow-input border-danger text-white">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
         
                            <Row className="form-group py-3">
                                <Col md={{ size: 10, offset: 5 }}>
                                <Button type="contact" color="white" className="box-shadow-button text-white text-bold  border-danger px-5 py-3">
                            Get in touch
                        </Button>
                                </Col>
                            </Row>
                        </Form> 

                    </div>
                </div>
           
            </div>
        );
    }
}


export default Contact;