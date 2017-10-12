import React, { Component } from 'react';
import logo from 'logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Container } from 'reactstrap'

import About from 'about/About'
import Contact from 'contact/Contact'
import Education from 'education/Education'
import Footer from 'footer/Footer'
import Header from 'header/Header'
import Home from 'home/Home'
import Information from 'information/Information'
import Services from 'services/Services'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/education" component={Education} />
          <Route path="/information" component={Information} />
          <Route path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
