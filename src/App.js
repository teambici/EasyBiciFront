import React from 'react';
import './App.css';
import Scanner from "./Scanner"
import QrGenerator from './QrGenerator';
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
        <div className="App">
          <Route path="/" exact component={LoginHome} />    
          <Route path="/name" exact component={Name} />      
          <Route path="/information" exact component={Information} />   
          <Route path="/terms" exact component={Terms} />   
        </div>
      </Router>
    );
  }
}

export default App;
