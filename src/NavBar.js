import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import classnames from "classnames";
import "./css/nav_bar.css";

class NavBar extends Component {
    state = {
        prevScrollPosition: window.pageYOffset,
        isVisible: false,
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const visible = window.pageYOffset > 10;
        this.setState({
            prevScrollPosition: window.currScrollPosition,
            isVisible: visible,
        });
    };

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    scrollToFunc(props) {
        const { fontSize } = props;
        return (
            <Link
                activeClass="active"
                to={props.section}
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                className="nav-link"
                style={{ fontSize: fontSize }}
            >
                {props.text}
            </Link>
        );
    }

    render() {
        const { width } = this.props;
        let fontSize = "20px";
        if(width < 565){
            fontSize = "14px"
        }
        if (width < 435) {
            fontSize ="10px";
        }
        return (
            <nav
                className={classnames("nav-bar", {
                    "nav-bar-hidden": !this.state.isVisible,
                })}
            >
                <Fragment>
                    <NavLink
                        className="nav-link"
                        onClick={this.scrollToTop}
                        to=""
                        style={{ fontSize: fontSize }}
                    >
                        Home
                    </NavLink>
                    <this.scrollToFunc
                        section="bio"
                        text="Bio"
                        fontSize={fontSize}
                    />
                    <this.scrollToFunc
                        section="work_experience"
                        text="Experience"
                        fontSize={fontSize}
                    />
                    <this.scrollToFunc
                        section="project_title"
                        text="Projects"
                        fontSize={fontSize}
                    />
                    <this.scrollToFunc
                        section="skills"
                        text="Skills/Tools"
                        fontSize={fontSize}
                    />
                    <this.scrollToFunc
                        section="contact"
                        text="Contact"
                        fontSize={fontSize}
                    />
                </Fragment>
            </nav>
        );
    }
}

export default NavBar;
