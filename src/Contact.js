import emailjs from 'emailjs-com';
// useState hook allows for manipulating components without having to change class
import React, {useState, Component, useRef, useEffect} from 'react';
// ReactDOM
import ReactDOM from 'react-dom';
// bootstrap components
import {Button, Navbar, Nav, Card, ListGroup, ListGroupItem, Row, Form, Col} from 'react-bootstrap';
// Animation library
import {Fade, Roll, Slide, Rotate, Flip} from 'react-reveal';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// my CSS
import './App.css';
import * as data from './pwords.json';

export default function Contact() {
    const [emailSent, setEmailSent] = useState(false);
    const [emailFailed, setEmailFailed] = useState(false);

    console.log(data.serviceID);

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm(data.serviceID, data.templateID, e.target, data.userID)
          .then((result) => {
              setEmailSent(!emailSent);
          }, (error) => {
              setEmailFailed(!emailFailed);
          });
      }
        return(
            
            <div className="frontEnd" id="contact">
                <div className="catTitle">
                    <h1 style={{textAlign: "center", paddingTop: "1em"}}>Want to find out more or hire me? <br/>I'm down to chat.</h1>
                    <br />
                    <Form onSubmit={sendEmail}>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control as="textarea" rows={1} placeholder="Your name goes here..." name="name" required/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Your Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" name="email" required/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Subject</Form.Label>
                            <Form.Control as="textarea" rows={1} placeholder="Subject goes here..." name="subject" required/>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Message content</Form.Label>
                            <Form.Control as="textarea" placeholder="Message content goes here..." rows={3} name="message" required/>
                        </Form.Group>
                        <Button variant="outline-light" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <br />
                    {emailSent && (<Fade><Card className="contConfirm bg-dark text-white mb-3">
                        <Card.Body>
                            <Card.Text>
                                Thank you! I have received your message and will get back to you ASAP. Have a good one!
                            </Card.Text>
                        </Card.Body>
                    </Card></Fade>)}
                    {emailFailed && (<Fade><Card className="contConfirm bg-dark text-white mb-3">
                        <Card.Body>
                            <Card.Text>
                                Sorry, something went wrong. Please try again!
                            </Card.Text>
                        </Card.Body>
                    </Card></Fade>)}
                    <p></p>
                </div>
            </div>
        );
    }

