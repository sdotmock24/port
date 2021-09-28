import React, { useState } from 'react';
import { Navbar, Footer } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import AboutMe from './pages/HomePage/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import ContactMe from './pages/ContactMe/ContactMe';
import ScrollToTop from './components/ScrollTopTop';
import Globalstyle from './globalStyles';


function App() {
  return (
    <Router>
      <Globalstyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/skills" component={Skills} />
        <Route path="/contactme" component={ContactMe} />
      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
