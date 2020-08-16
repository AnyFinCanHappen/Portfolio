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

    scrollToFunc (props){
        return (<Link
        activeClass="active"
        to= {props.section}
        spy={true}
        smooth={true}
        offset={-70}
        duration={600}
        className = "nav-link"
        >
        {props.text}
        </Link>);
    }      

    render(){
        return(
            <nav className = {classnames("nav-bar", {"nav-bar-hidden": !this.state.isVisible})}>
                <Fragment>
                    <NavLink className = "nav-link" onClick = {this.scrollToTop} to = "">
                        Home
                    </NavLink>
                    <this.scrollToFunc section = "bio" text = "Bio"/>
                    <this.scrollToFunc section = "project_title" text = "Projects"/>
                    <this.scrollToFunc section = "skills" text = "Skills/Tools"/>
                    <this.scrollToFunc section = "contact" text = "Contact"/>
                </Fragment>
            </nav>
        );
    }
}

export default NavBar;