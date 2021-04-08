// useState hook allows for manipulating components without having to change class
import React, {useState, Component, useRef, useEffect} from 'react';
// ReactDOM
import ReactDOM from 'react-dom';
// my CSS
import './App.css';
// bootstrap components
import {Button, Navbar, Nav, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
// Animation library
import {Fade, Roll, Slide, Rotate, Flip} from 'react-reveal';
// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// Particle generator for splash page
import Particles from 'react-particles-js';
// Temporary photo holder
import 'holderjs';
// Scroll tracker for navbar
import ScrollspyNav from "react-scrollspy-nav";
// React carousel for portfolio on mobile
import { Carousel } from "react-responsive-carousel";
// Carousel css
import "react-responsive-carousel/lib/styles/carousel.min.css";



function PortfolioFade(){
  const [show, toggleStaticPic] = useState(true);
  const [show2, toggleStaticPic2] = useState(true);
    
        return(
        <React.Fragment>
            <Fade right>
                <Card className="bg-dark text-white mb-2 hoverCard" onMouseEnter={() => toggleStaticPic(!show)} onMouseLeave={() => toggleStaticPic(!show)}>
                { show && (<Card.Img variant="top" src="p1.png" className="staticPic" id="static1" />)}
                <Card.Img variant="top" src="p1.gif" className="activePic" />
                <Card.Body>
                    <Card.Title>
                        Portfolio Website
                    </Card.Title>
                    <Card.Text>
                        Portfolio website developed from scratch for myself.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" id="listp1">
                    <ListGroupItem className="bg-dark">Front-End</ListGroupItem>
                    <ListGroupItem className="bg-dark">HTML/CSS</ListGroupItem>
                    <ListGroupItem>React.js</ListGroupItem>
                    <ListGroupItem>JavaScript</ListGroupItem>
                    <ListGroupItem>
                    <Card.Link href="braxtonmills.com">Demo</Card.Link>
                    <Card.Link href="https://github.com/bmills20/bmills20.github.io">github</Card.Link>
                    </ListGroupItem>
                </ListGroup>
                </Card>
                </Fade>
                <Fade right delay={500}>
                <Card className="bg-dark text-white mb-2 hoverCard" onMouseEnter={() => toggleStaticPic2(!show2)} onMouseLeave={() => toggleStaticPic2(!show2)}>
                { show2 && (<Card.Img variant="top" src='p2.png' className="staticPic" id="static2" />)}
                <Card.Img variant="top" src="p2.gif" className="activePic"/>
                <Card.Body>
                    <Card.Title>
                        Beyond the Veil
                    </Card.Title>
                    <Card.Text>
                        Side-scroller web-based JavaScript game
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" id="listp1">
                    <ListGroupItem className="bg-dark">Front-End</ListGroupItem>
                    <ListGroupItem>JavaScript</ListGroupItem>
                    <ListGroupItem>Physics Simulation</ListGroupItem>
                    <ListGroupItem>Sony Vegas</ListGroupItem>
                    <ListGroupItem>
                    <Card.Link href="https://raithhamzah.itch.io/beyond-the-veil-dreamphase">Demo</Card.Link>
                    <Card.Link href="https://github.com/dream-phase/beyond-the-veil">github</Card.Link>
                    <Card.Link href="https://www.youtube.com/watch?v=pE9Y9WbfwPU">Trailer</Card.Link>
                    </ListGroupItem>
                </ListGroup>
                </Card>
                </Fade>
                <Fade right delay={1000}>
                <Card className="bg-dark text-white mb-2 hoverCard">
                <Card.Img variant="top" src="p3.png" />
                <Card.Body>
                    <Card.Title>
                        Kinga's K9s
                    </Card.Title>
                    <Card.Text>
                        Freelance project work for Kinga's K9s, a dog training service
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" id="listp1">
                    <ListGroupItem className="bg-dark">Front-End</ListGroupItem>
                    <ListGroupItem>JavaScript</ListGroupItem>
                    <ListGroupItem>React.js</ListGroupItem>
                    <ListGroupItem>Work in progress</ListGroupItem>
                    <ListGroupItem>
                    <Card.Link href="https://braxtonmills.com/kk9s/">Demo</Card.Link>
                    <Card.Link href="https://github.com/bmills20/kk9s">github</Card.Link>
                    </ListGroupItem>
                </ListGroup>
                </Card>
                </Fade>
                <Fade right delay={1500}>
                <Card className="bg-dark text-white mb-2 hoverCard">
                <Card.Img variant="top" src="p4.png" />
                <Card.Body>
                    <Card.Title>
                        Valorstats
                    </Card.Title>
                    <Card.Text>
                        Interactive statistics application for the PC FPS Valorant
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush" id="listp1">
                    <ListGroupItem className="bg-dark">Front-End/Back-End</ListGroupItem>
                    <ListGroupItem>SQL</ListGroupItem>
                    <ListGroupItem>React.js</ListGroupItem>
                    <ListGroupItem>Work in progress</ListGroupItem>
                    <ListGroupItem>
                    <Card.Link href="https://github.com/bmills20/Valorstats">github</Card.Link>
                    </ListGroupItem>
                </ListGroup>
                </Card>
            </Fade>
        </React.Fragment>
  );
}
export default PortfolioFade;