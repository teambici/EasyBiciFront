import React, { Component } from 'react';
import "./LoginHome.css";
import { Redirect } from "react-router-dom";
import uuid from 'react-uuid'; 

class QrGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = { back: false};
    this.handleback = this.handleback.bind(this);
}
handleback(event){
    this.setState({back:true})
}

  render() {
    if(this.state.back){
        return <Redirect to={{
            pathname: '/Confirmed'
        }}
        />
    }
    var QRCode = require('qrcode.react');
    var seed= uuid();
    return (
      <div className="QrGenrator">

        <div>

          <h2>YOUR QR CODE  </h2>
          <QRCode value= {seed.toString()}/>,
        </div>
        <button className="boton_personalizado" onClick={this.handleback}> volver </button>
      </div>
     
    );
  }

}

export default QrGenerator;