import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './partials/Footer'
import Header from './partials/Header'
import Layout from './partials/Layout'

class App extends Component {
  render() {
    let name = 'Bruno';
    var getName = (firstName) => {
      return firstName;
    }
    return (
      <div className="App">
        <Header/>
        <Layout/>
        <Footer/>
      </div>
    );
  }
}

export default App;
