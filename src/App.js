import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import {Link, animateScroll as scroll} from "react-scroll";
import './App.css';
import NavBar from './NavBar';
import logo from "./css/self_image.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import background_image from "./css/background_mono.jpg";
import Image from "react-bootstrap/Image";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component
{
  state = {
    width:window.innerWidth
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  updateWidth = () =>{
    this.setState({width:window.innerWidth})
  }

  scrollToTop = () =>{
    scroll.scrollToTop();
  }

  scrollToFunc (props){
    return (<Link
    activeClass="active"
    to= {props.section}
    spy={true}
    smooth={true}
    offset={-70}
    duration={600}
    className = "scroll-down"
  >
  </Link>);
  }
  
  /*
            <div className = "background_image">
            <NavBar scrollToFunc = {this.scrollToFunc}> </NavBar>
            <div className = "intro">
                Sidney Tan
                <p>
                  Full Stack Developer
                </p>
                <this.scrollToFunc section = "bio"/>
            </div>
          </div>
  */

  render()
  {
    const {width} = this.state;
    let videoPlayerSize = "640px"
    if(width <  640){
      videoPlayerSize = "auto";
    }
    return(
      <div className = "App">
        <NavBar > </NavBar>
        <Container fluid>
          <Row >
            <Col className = "px-0">
            <Image style = {{backgroundSize: "auto"}} src = {background_image} fluid></Image>

            <div className = "intro">
                Sidney Tan
                <p>
                  Full Stack Developer
                </p>
                <this.scrollToFunc section = "bio"/>
            </div>
            </Col>
          </Row>
          <div className id = "bio">
            <p className = "title">
              Bio
            </p>
            <p className = "bio_paragraph">
              Hello! I am a computer science major from University California Irvine. My ideal postion is to be full stack devloper. Languages I know
              are Java, React, C++, Python, mySQL, and many more.
              <br></br><br></br>
              Other hobbies include playing video games (Valorant, League of Legends, Escape From Tarkov, ...) and guitar.
            </p>
            <this.scrollToFunc section = "project_title"/>
          </div>
          <div  id = "projects">
            <p className = "title" id = "project_title">
              Projects
            </p>
            <p className = "fabflix_title">
              Fabflix
            </p>
            <ReactPlayer url = "https://www.youtube.com/watch?v=mP02Bd30sa8" controls = "true" className = "fabflix_player" width = {videoPlayerSize}>
            </ReactPlayer>
            <p className = "fabflix_description">
              Web application that was built in one of my project course at UCI.
              <br></br>
              Front End:
              React, Node.js, AJAX
              <br></br>
              Back End:
              Java
              <br></br>
              Databases:
              MySQL, JDBC
              <br></br>
              Other tools:
              GitHub, Gradle, Postman
            </p>
            <p className = "github_title">
              GitHub
            </p>
            <p className = "github_description">
              Link to my <a href="https://github.com/AnyFinCanHappen" target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
            <this.scrollToFunc section = "contact"/>
          </div>
          <div  id = "contact">
            <p className = "title">
                Contact Me
            </p>
            <p className = "github_title">
              <a href="https://www.linkedin.com/in/sidney-tan-60a6b1192" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </p>
            <p className = "github_title">
              sidneyjt@uci.edu
            </p>
            <img src = {logo} alt ="self" className = "self_image" />
            <br></br><br></br>
            <a onClick = {this.scrollToTop} href="/#" className = "scroll-up"> </a>
          </div>
        </Container>
      </div>
    );
  }
}
export default App;
