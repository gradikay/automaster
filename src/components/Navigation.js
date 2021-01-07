import React from 'react';
import { Link } from "react-router-dom";
import '../css/Navigation.css';

//React Link Block - Link to="#"
function ReactLink(props) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={props.path}>{props.name}</Link>
        </li>
        );
}
//HTML Link Block - a href="#"
function HtmlLink(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.path}>{props.name}</a>
        </li>
    );
}
function Navigation() {
    return (
        <div className="Navigation">
            <nav className="navbar navbar-expand-md navbar-dark">
                { /* BRAND */ }
                <Link className="navbar-brand" to="/">Automaster</Link>
                { /* TOGGLER/COLLAPSIBE BUTTON */ }
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                { /* NAVBAR LINKS */ }
                <div className="collapse navbar-collapse justify-content-center" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        { /* HOME */ }
                        <ReactLink path="/" name="Home" />
                        { /* AUTO LISTINGS*/ }
                        <ReactLink path="/listings" name="Auto Listings" />
                        { /* ABOUT - ABOUT US */ }
                        <HtmlLink path="#about" name="About Us" /> 
                        { /* TESTIMONIALS */ }
                        <HtmlLink path="#testimonials" name="Testimonials" /> 
                        { /* NEWS */ }
                        <ReactLink path="/news" name="News" /> 
                        { /* CONTACT */ }
                        <ReactLink path="/contact" name="Contact"/>
                    </ul>
                </div>
            </nav>
        </div>
        );
}

export default Navigation;
