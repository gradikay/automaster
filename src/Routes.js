import React from "react";
import { Route, Switch } from "react-router-dom";
// Components
import AppliedRoute from "./components/AppliedRoute"; 
// Containers
import News from "./containers/News";
import Home from "./containers/Home";  
import Login from "./containers/Login";
import AboutUs from "./containers/AboutUs";
import Contact from "./containers/Contact";
import Register from "./containers/Register";
import Listings from "./containers/Listings";
import NotFound from "./containers/NotFound"; 
import Testimonials from "./containers/Testimonials";

export default function Routes({ appProps }) {
    return (
        <Switch>
            { /* NAVIGATION LINKS */ }
            <AppliedRoute path="/News" component={News} appProps={appProps} />
            <AppliedRoute path="/" exact component={Home} appProps={appProps} /> 
            <AppliedRoute path="/login" component={Login} appProps={appProps} /> 
            <AppliedRoute path="/about" component={AboutUs} appProps={appProps} />
            <AppliedRoute path="/contact" component={Contact} appProps={appProps} />
            <AppliedRoute path="/register" component={Register} appProps={appProps} /> 
            <AppliedRoute path="/Listings" exact component={Listings} appProps={appProps} />
            <AppliedRoute path="/Testimonials" component={Testimonials} appProps={appProps} />

            { /* NO EXISTING LINKS */ }
            <Route component={NotFound} />
        </Switch>
    );
}