import React, {Component, Fragment} from "react";
import {NavLink} from "react-router-dom";
import {Link, animateScroll as scroll} from "react-scroll"
import classnames from "classnames";
import "./css/nav_bar.css";

class NavBar extends Component{
    state = {
        prevScrollPosition : window.pageYOffset,
        isVisible:false
    }

    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () =>
    {
        const visible = window.pageYOffset > 10;
        this.setState({
            prevScrollPosition: window.currScrollPosition,
            isVisible: visible
        });
    };

    scrollToTop = () =>{
        scroll.scrollToTop();
      }

    render(){
        return(
            <nav className = {classnames("nav-bar", {"nav-bar-hidden": !this.state.isVisible})}>
                <Fragment>
                    <NavLink className = "nav-link" onClick = {this.scrollToTop} to = "">
                        Home
                    </NavLink>
            
                    <Link
                    activeClass="active"
                    to="bio"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    className = "nav-link"
                    >Bio
                    </Link>

                    <Link
                    activeClass="active"
                    to="project_title"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    className = "nav-link"
                    >Projects
                    </Link>

                    <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={600}
                    className = "nav-link"
                    >Contact
                    </Link>

                </Fragment>
            </nav>
        );
    }
}

export default NavBar;