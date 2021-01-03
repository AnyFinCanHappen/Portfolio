import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Link, animateScroll as scroll } from "react-scroll";
import "./App.css";
import "./css/logo.css";
import NavBar from "./NavBar";
import logo from "./css/self_image.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./Skills";

import background_image from "./css/background_mono.jpg";
import mountiePlannerImage from "./css/projectImage/Test.png";
import linkLogo from "./css/Logos/Link.png";
import githubLogo from "./css/Logos/github.png";

class App extends Component {
    state = {
        width: window.innerWidth,
    };

    componentDidMount() {
        this.updateWidth();
        window.addEventListener("resize", this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWidth);
    }

    updateWidth = () => {
        this.setState({ width: window.innerWidth });
    };

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    scrollToFunc(props) {
        return (
            <Link
                activeClass="active"
                to={props.section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                className="scroll-down"
            ></Link>
        );
    }

    render() {
        const { width } = this.state;
        let videoPlayerWidth = "640px";
        let videoPlayerHeight = "360px";
        let introFontSize = {};
        if (width < 640) {
            videoPlayerWidth = "auto";
            videoPlayerHeight = "200px";
            introFontSize.fontSize = "60%";
        }
        return (
            <div className="App" style={{ overflowX: "hidden" }}>
                <NavBar width={width}> </NavBar>
                <Container fluid>
                    <Row>
                        <Col className="px-0">
                            <Image
                                style={{ backgroundSize: "auto" }}
                                src={background_image}
                                fluid
                            ></Image>

                            <div className="intro" style = {introFontSize}>
                                Sidney Tan
                                <p>Full Stack Developer</p>
                                <this.scrollToFunc section="bio" />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col md={6} xs={10}>
                            <div id="bio">
                                <p className="title">Bio</p>
                                <p className="bio_paragraph">
                                    Hello, I am a full stack developer from
                                    University of California Irvine. Being a
                                    full stack developer enables my passion to
                                    create tools that will make users' lives
                                    more convenient. I am always eager to learn
                                    the latest web development technologies that
                                    can be used in my work or projects. When it
                                    comes to web applications, I want to build a
                                    positive user experience with clean and
                                    efficient software.
                                    <br></br>
                                </p>
                                <this.scrollToFunc section="project_title" />
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col></Col>
                        <Col md={6} xs={10}>
                            <div id="projects">
                                <p className="title" id="project_title">
                                    Projects
                                </p>
                                <br></br>
                                <div style={{ textAlign: "left" }}>
                                    <p className="fabflix_title">
                                        Mountie Planner
                                    </p>
                                    <Image
                                        src={mountiePlannerImage}
                                        style={{ marginBottom: "20px" }}
                                        fluid
                                    ></Image>
                                    <br></br>
                                    <div className="fabflix_description">
                                        A Course scheduler made with the MERN
                                        stack!
                                        <br></br>
                                        <div
                                            style={{
                                                marginTop: "30px",
                                                marginBottom: "30px",
                                            }}
                                        >
                                            <b>Tools and Languages: </b>
                                            <br></br>
                                            JavaScript, React.js, Node.js,
                                            Express.js, MongoDB, AWS(EC2),
                                            NGINX, PM2.
                                            <br></br>
                                        </div>
                                        <Button
                                            variant="logoColor"
                                            href="https://mountieplanner.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={linkLogo}
                                                alt="x"
                                                style={{
                                                    height: "40px",
                                                    width: "40px",
                                                }}
                                            ></img>
                                        </Button>
                                        <Button
                                            variant="logoColor"
                                            href="https://github.com/AnyFinCanHappen/mtsac_scheduler_fe"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={githubLogo}
                                                alt="x"
                                                style={{
                                                    height: "40px",
                                                    width: "40px",
                                                }}
                                            ></img>
                                        </Button>
                                    </div>
                                </div>
                                <br></br>
                                <div style={{ textAlign: "left" }}>
                                    <p className="fabflix_title">Fabflix</p>
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=mP02Bd30sa8"
                                        controls={true}
                                        className="fabflix_player"
                                        width={videoPlayerWidth}
                                        height={videoPlayerHeight}
                                        style={{ marginBottom: "30px" }}
                                    ></ReactPlayer>
                                    <div className="fabflix_description">
                                        CRUD web app that allows users to
                                        buy/search movies.
                                        <br></br>
                                        <div
                                            style={{
                                                marginTop: "30px",
                                                marginBottom: "30px",
                                            }}
                                        >
                                            <b>Tools and Languages: </b>
                                            React.js, JavaScript, Node.js, Java, Grizzly, 
                                            MySQL, JDBC, Jackson.
                                        </div>
                                        <Button
                                            variant="logoColor"
                                            href="https://github.com/AnyFinCanHappen/FabFlix"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                src={githubLogo}
                                                alt="x"
                                                style={{
                                                    height: "40px",
                                                    width: "40px",
                                                }}
                                            ></img>
                                        </Button>
                                    </div>
                                </div>
                                <br></br>
                                <div style={{ textAlign: "left" }}>
                                    <p className="github_title">
                                        Check out more of my projects at my
                                        GitHub!
                                    </p>
                                    <p className="github_description">
                                        Link to my{" "}
                                        <a
                                            href="https://github.com/AnyFinCanHappen"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            GitHub
                                        </a>
                                    </p>
                                </div>
                                <this.scrollToFunc section="skills" />
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col></Col>
                        <Col xs={10} sm={10}>
                            <div id="skills">
                                <p className="title">Skills and Tools</p>
                                <Skills></Skills>
                            </div>
                            <br></br>
                            <this.scrollToFunc section="contact" />
                        </Col>

                        <Col></Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <Row>
                        <Col></Col>
                        <Col md={6} xs={10}>
                            <div id="contact">
                                <p className="title">Contact Me</p>
                                <p className="github_title">
                                    <a
                                        href="https://www.linkedin.com/in/sidney-tan-60a6b1192"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Linkedin
                                    </a>
                                </p>
                                <p className="github_title">sidneyjt@uci.edu</p>
                                <img
                                    src={logo}
                                    alt="self"
                                    className="self_image"
                                />
                                <br></br>
                                <br></br>
                                <a
                                    onClick={this.scrollToTop}
                                    href="/#"
                                    className="scroll-up"
                                >
                                    {" "}
                                </a>
                                <br></br>
                                <br></br>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default App;
