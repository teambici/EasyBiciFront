import React from 'react';
import './App.css';
import QrGenerator from './QrGenerator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEvent = () => {
    
  }
  render() {
    return (
      <div className="App">
        
        <QrGenerator />
      </div>
    );
  }
}

export default App;
