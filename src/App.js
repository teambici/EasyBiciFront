import React from 'react';
import './App.css';
import Scanner from "./Scanner"
import QrGenerator from './QrGenerator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }  
  render() {
    return (
      <div className="App">        
        <QrGenerator />
        <Scanner/>
      </div>
    );
  }
}

export default App;
