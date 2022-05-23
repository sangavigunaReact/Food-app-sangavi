import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import Infosection from './components/infosection/infosection';
import Products from './components/products/products';
import { Globalstyle } from './globalstyle';
import { Productdata, Productdatatwo } from './components/products/data';
import Feature from './components/features/feature';
import Footer from './components/footer/footer';


function App() {
  return (
    <Router>
      <Globalstyle />
     <Infosection />
     <Products heading='Choose Your Favorite' data={Productdata}/>
     <Feature />
     <Products heading='Sweet Trates for You' data={Productdatatwo}/>
     <Footer />
    </Router>
  );
}

export default App;
