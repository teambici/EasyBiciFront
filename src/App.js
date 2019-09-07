import React from 'react';
import './App.css';
<<<<<<< HEAD
import Scanner from "./Scanner"
import QrGenerator from './QrGenerator';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LoginHome } from "./Components/LoginHome"
import { Name } from "./Components/Create_acount/Name"
import { Information } from "./Components/Create_acount/Information"
import { Terms } from "./Components/Create_acount/Terms"
=======
import Login from './components/Login';
import Services from './components/Services';
import QrGenerator from './components/QrGenerator';
import BikeReserve from './components/BikeReserve';
import Confirmed from './components/Confirmed';
import Scanner from "./Scanner"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LoginHome } from "./components/LoginHome"
import { Name } from "./components/Create_acount/Name"
import { Information } from "./components/Create_acount/Information"
import { Terms } from "./components/Create_acount/Terms"
>>>>>>> alejandro

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={LoginHome} />    
          <Route path="/name" exact component={Name} />      
<<<<<<< HEAD
          <Route path="/information" exact component={Information} />   
=======
          < Route path="/information" exact component={Information} />   
>>>>>>> alejandro
          <Route path="/terms" exact component={Terms} />   
        </div>
      </Router>
    );
  }
}

export default App;
