import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutUs from "./AboutUs";
import Brand from "./Brand";
import Contact from "./Contact";
import Home from "./Home";
import Store from "./Store";
import Headers from "./Headers";

export default () => {
        return (
        <Router>
        <Headers />
        <Route path="/" exact="true" component={Home} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/brand" component={Brand} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Store" component={Store} />
    </Router>
    )
}