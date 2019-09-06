import React, { Component } from 'react';
class QrGenerator extends Component {
  

  render() {
    var QRCode = require('qrcode.react');
    var min=1;
    var max=100;
    var seed= 'bbsitaaaa';
    return (
      <div className="QrGenrator">

        <div>

          <h2>hola  </h2>
          <QRCode value= {seed.toString()}/>,
        </div>
        
      </div>

    );
  }

}

export default QrGenerator;