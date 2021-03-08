import React, {useState, Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Button, Navbar, Nav, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import {Fade, Roll, Slide, Rotate, Flip} from 'react-reveal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js'; 
import 'holderjs';
import ScrollspyNav from "react-scrollspy-nav";
//useState hook allows for manipulating components without having to change class

/*const useStyles = makeStyles({
  root: {
    maxWidth: 310,
    transition: "transform"
  }
})*/
class myPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true, show2: true };
    // Set up 'this' variable for setActivePic method
    this.toggleStaticPic = this.toggleStaticPic.bind(this);
    this.toggleStaticPic2 = this.toggleStaticPic2.bind(this);
    // Create ref to the first portfolio's photo
    this.photo1 = React.createRef();
  }

  toggleStaticPic(){
    this.setState(state => ({
      show: !state.show
    }));
    console.log(this.state.show);
  }

  toggleStaticPic2(){
    this.setState(state => ({
      show2: !state.show2
    }));
    console.log(this.state.show2);
  }

  render(){
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
            "portfolio"
          ]}
          activeNavClass="active"
          offset={-25} 
          >
                <Nav.Link eventKey={1} className="px-4 py-2" href="#frontEnd">Front-End</Nav.Link>
                <Nav.Link eventKey={2} className="px-4 py-2" href="#backEnd">Back-End</Nav.Link>
                <Nav.Link eventKey={3} className="px-4 py-2" href="#portfolio">Portfolio</Nav.Link>
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
          <div className="portfolioRow" /> 
          <h1>Portfolio:</h1> 
            <br /><br /><br />
            <Roll right>
              <Card className="bg-dark text-white mb-3" onMouseEnter={this.toggleStaticPic} onMouseLeave={this.toggleStaticPic}>
              { this.state.show && (<Card.Img variant="top" src='p1.png' className="staticPic" id="static1" />)}
              <Card.Img variant="top" src='p1.gif' className="activePic" />
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
                  <ListGroupItem>React</ListGroupItem>
                  <ListGroupItem>JavaScript</ListGroupItem>
                  <ListGroupItem>
                    <Card.Link href="braxtonmills.com">Demo</Card.Link>
                    <Card.Link href="https://github.com/bmills20/bmills20.github.io">github</Card.Link>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Roll>
          <Roll right delay={500}>
              <Card className="bg-dark text-white mb-3" onMouseEnter={this.toggleStaticPic2} onMouseLeave={this.toggleStaticPic2}>
              { this.state.show2 && (<Card.Img variant="top" show={this.open} src='p2.png' className="staticPic" id="static2" />)}
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
                  <ListGroupItem>Graphic Design</ListGroupItem>
                  <ListGroupItem>Sony Vegas</ListGroupItem>
                  <ListGroupItem>
                    <Card.Link href="https://raithhamzah.itch.io/beyond-the-veil-dreamphase">Demo</Card.Link>
                    <Card.Link href="https://github.com/dream-phase/beyond-the-veil">github</Card.Link>
                    <Card.Link href="https://www.youtube.com/watch?v=pE9Y9WbfwPU">Trailer</Card.Link>
                  </ListGroupItem>
                </ListGroup>
              </Card>
          </Roll>
          <Roll right delay={1000}>
              <Card className="bg-dark text-white mb-3">
              <Card.Img variant="top" src="holder.js/225x125" />
                <Card.Body>
                    <Card.Title>
                      Project 3
                    </Card.Title>
                    <Card.Text>
                      Project Description
                    </Card.Text>
                </Card.Body>
              </Card>
          </Roll>
          <Roll right delay={1500}>
              <Card className="bg-dark text-white mb-3">
              <Card.Img variant="top" src="holder.js/225x125" />
                <Card.Body>
                    <Card.Title>
                      Project 4
                    </Card.Title>
                    <Card.Text>
                      Project Description
                    </Card.Text>
                </Card.Body>
              </Card>
          </Roll>
          </div>
        </div>
    );
  }
}
export default myPortfolio;
