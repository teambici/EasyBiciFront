import React from 'react';
import './App.css';

import {Login} from './components/Login';
import Services from './components/Services';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LoginHome } from "./components/LoginHome"
import { Name } from "./components/Create_acount/Name"
import { Information } from "./components/Create_acount/Information"
import { Terms } from "./components/Create_acount/Terms"
import Confirmed from './components/Confirmed.css';
import qrGenerator from "./components/QrGenerator";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App color_fondo">
          <Route path="/" exact component={LoginHome} />
          <Route path="/qrGenerator" exact component={qrGenerator} />
          <Route path="/login" exact component={Login} />
          <Route path="/Services" exact component={Services} />     
          <Route path="/name" exact component={Name} />      
          <Route path="/information" exact component={Information} />   
          <Route path="/terms" exact component={Terms} />
          <Route path="/Confirmed" exact component={Confirmed}/>
        </div>
      </Router>
    );
  }
}

export default App;
