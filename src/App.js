import React from 'react';
import './App.css';

import {Login} from './components/Login';
import Services from './components/Services';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LoginHome } from "./Components/LoginHome"
import { Name } from "./Components/Create_acount/Name"
import { Information } from "./Components/Create_acount/Information"
import { Terms } from "./Components/Create_acount/Terms"

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App color_fondo">
          <Route path="/" exact component={LoginHome} />
          <Route path="/login" exact component={Login} />
          <Route path="/Services" exact component={Services} />     
          <Route path="/name" exact component={Name} />      
          <Route path="/information" exact component={Information} />   
          <Route path="/terms" exact component={Terms} />
        </div>
      </Router>
    );
  }
}

export default App;
