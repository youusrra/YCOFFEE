import React from "react";
import './App.css'
import { Header, AboutUs, Menu, Gallery, Contact, Footer } from './container';
import  { Navbar }  from './components';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Menu />
    <Gallery />
    <Contact />
    <Footer /> 
  </div>
)

export default App;
