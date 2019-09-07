import React from 'react';
import './App.css';
import Login from "./components/Login";
import { Bike } from "./components/Bike";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BikeReserve } from "./components/BikeReserve";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Bike} />
          <Route path="/bikereserve" exact component={BikeReserve} />
        </div>
      </Router>
    );
  }
}

export default App;
