import React from 'react';
import logo from './logo.svg';
import './App.css';
import QrReader from 'react-qr-reader'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'No result'
    }
  }
  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    const divStyle = {
      heigth: '50vh',
      width: '50vw',
      display:'flex',
     

    };
    return (
      <div style={divStyle}>
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default App;
