 import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from "../components/AboutComponent";
import Home from '../components/HomeComponent';
import Users from '../components/UserComponent';
import '../assets/stylesheets/modules/about.css'

class Layout extends Component {
    render() {
        return (
            <div className="Content">
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
            </div>
        );
    }
}

export default Layout;