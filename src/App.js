import React from 'react';
import './App.css';
import Login from './components/Login';
import Services from './components/Services';
import QrGenerator from './components/QrGenerator';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  handleEvent = () => {
    
  }
  render() {
    return (
      <div className="App">
        
        <Services />
      </div>
    );
  }
}

export default App;
