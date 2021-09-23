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
        <Route path="/aboutme" exact component={AboutMe} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/contactme" exact component={ContactMe} />
      </Switch>
      <Footer />
    </Router>
  );
}

const Homme = () => (
  <>
    
  </>
);

export default App;
