import React, {Component} from 'react';
import ReactPlayer from 'react-player'
import {Link, animateScroll as scroll} from "react-scroll"
import './App.css';
import NavBar from './NavBar'
import logo from "./css/self_image.jpg"


class App extends Component
{
  state = {

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
  
  render()
  {
    return(
      <div className = "App">
        <div className = "background_image">
          <NavBar> </NavBar>
          <div className = "intro">
              Sidney Tan
              <p>
                Full Stack Developer
              </p>
              <this.scrollToFunc section = "bio"/>
          </div>
        </div>
        <div className = "bio_section" id = "bio">
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
        <div className = "projects_section" id = "projects">
          <p className = "title" id = "project_title">
            Projects
          </p>
          <p className = "fabflix_title">
            Fabflix
          </p>
          <ReactPlayer url = "https://www.youtube.com/watch?v=mP02Bd30sa8" controls = "true" className = "fabflix_player">
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
        <div className = "contact_section" id = "contact">
          <p className = "title">
              Contact Me
          </p>
          <p className = "github_title">
            <a href="https://github.com/AnyFinCanHappen" target="_blank" rel="noopener noreferrer">Linkedin</a>
          </p>
          <p className = "github_title">
            sidneyjt@uci.edu
          </p>
          <img src = {logo} alt ="self" className = "self_image" />
          <br></br><br></br>
          <a onClick = {this.scrollToTop} href="/#" className = "scroll-up"> </a>
        </div>
      </div>
    );
  }
}
export default App;
