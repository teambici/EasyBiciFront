import React from 'react';
import './App.css';
import Login from './components/Login';
import Services from './components/Services';
import QrGenerator from './components/QrGenerator';
import BikeReserve from './components/BikeReserve';
import Confirmed from './components/Confirmed';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEvent = () => {
    
  }
  render() {
    return (
      <div className="App">
        
        < Confirmed />
      </div>
    );
  }
}

export default App;
