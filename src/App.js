// useState hook allows for manipulating components without having to change class
import React, {useState, Component, useRef, useEffect} from 'react';
// ReactDOM
import ReactDOM from 'react-dom';
// my CSS
import './App.css';
// bootstrap components
import {Button, Navbar, Nav, Card, ListGroup, ListGroupItem, Form} from 'react-bootstrap';
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

import PortfolioFade from "./PortfolioFade";
import PortfolioCarousel from "./PortfolioCarousel";
import Contact from "./Contact";
import mailHandler from "./mailHandler";

export default function App() {
  const getIsMobile = () => window.innerWidth <= 768;
  const [isMobile, setIsMobile] = useState(getIsMobile());


  useEffect(() => {
    const onResize = () => {
        setIsMobile(getIsMobile());
    }

    window.addEventListener("resize", onResize);

    return () => {
        window.removeEventListener("resize", onResize);
      }
    }, []);

  return (
    <div className="App">
      <Particles
        params={{
        "particles": {
            "number": {
                "value": 50
            },
            "size": {
                "value": 2
            },
            "line_linked": {
              "shadow": {
                "enable": false
              }
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onDiv": {
                  "selectors": "#headerText",
                  "enable": true,
                  "mode": "bounce",
                  "type": "rectangle"
                },
            }
        },
        "motion": {
          "reduce": {
            "factor": 3,
            "value": false
          }
        },
        "retina_detect": true
      }} />
      <header className="App-header">
        <div className="headerText" id="headerText">
          <Fade bottom delay={500}>
            Hello there, my name is Braxton Mills.
          </Fade>
          <Fade bottom delay={1500}>
            I am a software engineer with back-end and front-end knowledge.
          </Fade>
          <Fade bottom delay={2500}>
            Scroll down to view my skills and work.
          </Fade>
        </div>
      </header>
        <Navbar sticky="top" bg="dark" variant="dark">
            <Nav className="mr-auto">
            <ScrollspyNav
        scrollTargetIds={[
          "frontEnd",
          "backEnd",
          "portfolio",
          "contact"
        ]}
        activeNavClass="active"
        offset={-25} 
        >
              <Nav.Link eventKey={1} className="px-4 py-2" href="#frontEnd">Front-End</Nav.Link>
              <Nav.Link eventKey={2} className="px-4 py-2" href="#backEnd">Back-End</Nav.Link>
              <Nav.Link eventKey={3} className="px-4 py-2" href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link eventKey={4} className="px-4 py-2" href="#contact">Contact</Nav.Link>
              </ScrollspyNav>
            </Nav>
        </Navbar>
      <div className="frontEnd" id="frontEnd">
        <div className="catTitle">
          <h1>Front-End Skills:</h1>
        </div>
        <br />
        <div className="skillFlex">
        <Roll left>
          <Card className="bg-dark text-white mb-3">
            <Card.Body>
                <Card.Title>
                  HTML
                </Card.Title>
            </Card.Body>
          </Card>
        </Roll>
        <Roll left delay={500}>
          <Card className="bg-dark text-white mb-3">
          <Card.Body>
              <Card.Title>
                CSS
              </Card.Title>
          </Card.Body>
          </Card>
        </Roll>
        <Roll left delay={1000}>
          <Card className="bg-dark text-white mb-3">
            <Card.Body>
                <Card.Title>
                  JavaScript
                </Card.Title>
            </Card.Body>
          </Card>
        </Roll>
        <Roll left delay={1500}>
          <Card className="bg-dark text-white mb-3">
            <Card.Body>
                <Card.Title>
                  Bootstrap
                </Card.Title>
            </Card.Body>
          </Card>
        </Roll>
        <Roll left delay={2000}>
          <Card className="bg-dark text-white mb-3">
          <Card.Body>
              <Card.Title>
                jQuery
              </Card.Title>
          </Card.Body>
        </Card>
        </Roll>
        <Roll left delay={2500}>
          <Card className="bg-dark text-white mb-3">
            <Card.Body>
                <Card.Title>
                  React
                </Card.Title>
            </Card.Body>
          </Card>
        </Roll>
        </div>
      </div>
      <div className="frontEnd" id="backEnd">
        <div className="catTitle">
          <h1>Back-End Skills:</h1>
        </div>
        <br />
        <div className="skillFlex">
          <Roll right>
            <Card className="bg-dark text-white mb-3">
              <Card.Body>
                  <Card.Title>
                    Python
                  </Card.Title>
              </Card.Body>
            </Card>
          </Roll>
        <Roll right delay={500}>
            <Card className="bg-dark text-white mb-3">
              <Card.Body>
                  <Card.Title>
                    Java
                  </Card.Title>
              </Card.Body>
            </Card>
        </Roll>
        <Roll right delay={1000}>
            <Card className="bg-dark text-white mb-3">
              <Card.Body>
                  <Card.Title>
                    PHP
                  </Card.Title>
              </Card.Body>
            </Card>
        </Roll>
        <Roll right delay={1500}>
            <Card className="bg-dark text-white mb-3">
              <Card.Body>
                  <Card.Title>
                    SQL
                  </Card.Title>
              </Card.Body>
            </Card>
        </Roll>
        <Roll right delay={2000}>
            <Card className="bg-dark text-white mb-3">
              <Card.Body>
                  <Card.Title>
                    Node.js
                  </Card.Title>
              </Card.Body>
            </Card>
        </Roll>
        <Roll right delay={2500}>
            <Card className="bg-dark text-white mb-3">
              <Card.Body>
                  <Card.Title>
                    MongoDB
                  </Card.Title>
              </Card.Body>
            </Card>
        </Roll>
        </div>
      </div>
      <div className="frontEnd" id="portfolio">
      <h1 className="portfolioHeader">Portfolio:</h1>
        <div className="portfolioRow" />
          {isMobile ? (<PortfolioCarousel/ >) : (<PortfolioFade />)}
        </div>
      <Contact />
      </div>
  );
}

