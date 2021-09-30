import React, { useState,useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
import Home from '../components/Home';
import SingUp from '../components/singup/SingUp';
import axios from 'axios'

const App = () =>{

  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>links</li>
            <li><Link to='/' style={{color:'whitesmoke'}}>Home</Link></li>
            <li><Link to='/singup' style={{color:'whitesmoke'}}>SINGUP</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/singup' component={SingUp} exact />
        </Switch>
      </div>
    </Router>
  )
}


export default App
