// import React, {useState} from 'react'
import './index.css';
import UseState from './UseState';
import Navbar from './Navbar';
import UseEffect from './UseEffect';
import UseRef from './UseRef';
import React from "react";
import About from './About';
import Pageindex from './Pageindex';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import UseContext from './UseContext';

const App = () => {

return(
  <>
  <Router>
  <Navbar></Navbar>
  <Routes>
    <Route path="/UseState" element={<UseState/>}/>
    <Route path="/UseEffect" element={<UseEffect/>}/> 
    <Route path="/UseRef" element={<UseRef/>}/>
    <Route path="/Pageindex" element={<Pageindex/>} />
    <Route path="/About" element={<About/>}/>
    <Route path="/Pageindex" element={<Pageindex/>}/>
    <Route path="/UseContext" element={<UseContext/>}/>
  </Routes>
  </Router>

  </>

)
  
  
  
}

export default App
