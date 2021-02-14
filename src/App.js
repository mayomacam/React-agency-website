import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//navbar
import NavBar from './component/NavBar';

//pages
import Home from './component/pages/Home';
import About from './component/pages/About';
import Portfolio from './component/common/Portfolio';
import Contact from './component/pages/Contact';
import Footer from './component/common/Footer';

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar>
                    <Route
                        exact={true}
                        path="/"
                        component={Home}
                    />
                    <Route
                        exact={true}
                        path="/about"
                        component={About}
                    />
                    <Route
                        exact={true}
                        path="/services"
                        component={Home}
                    />
                    <Route
                        exact={true}
                        path="/portfolio"
                        component={Portfolio}
                    />
                    <Route
                        exact={true}
                        path="/team"
                        component={About}
                    />
                    <Route
                        exact={true}
                        path="/contact"
                        component={Contact}
                    />
                </NavBar>
                <Footer />
            </Router>
        );
    }
}

export default App;
