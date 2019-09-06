import React from 'react';
import './App.css';
import Login from "./components/Login"
import Scanner from "./Scanner"
import QrGenerator from './QrGenerator';
import Bike from "./components/Bike"

class App extends React.Component {
  constructor(props) {
    super(props);
  }  
  handleEvent = () => {
    
  }
  render() {
    return (
      <div className="App">        
        <Bike/>
      </div>
    );
  }
}

export default App;
