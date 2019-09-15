import React, { Component } from 'react';
import "./Confirmed.css";
import Divider from '@material-ui/core/Divider';
import Face from '@material-ui/icons/Face';
import { Redirect } from "react-router-dom";
class hostService extends Component {
    constructor(props) {
        super(props);
        this.state = { qrButton: false, notification: false  ,scan: false};
        this.handleqrButton = this.handleqrButton.bind(this);
        this.handlenotification = this.handlenotification.bind(this);
        this.handlescan=this.handlescan.bind(this);
    }
    handleqrButton(event) {
        this.setState({ qrButton: true })
    }
    handlenotification(event) {
        this.setState({ notification: true })
    }
    handlescan(event) {
        this.setState({ scan: true })
    }

    whatView() {
        if (this.state.qrButton) {
            return (
                <div>
                    <button className="boton_qr" onClick={this.handlescan}>SCAN QR CODE</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button className="boton_down" onClick={this.handleqrButton}>CONFIRM</button>
                    <button className="boton_down" onClick={this.handlenotification}>DECLINE</button>
                </div>

            )
        }
    }
    render() {
        if (this.state.notification) {
            return <Redirect to={{
                pathname: '/notifications'
            }}
            />
        }
        if (this.state.scan) {
            return <Redirect to={{
                pathname: '/Scanner'
            }}
            />
        }
        return (

            <div className=" Confirmed">
                <h1 className="titulo">SERVICE</h1>
                <div />
                <Divider />
                <div>
                    <Face className="usuario"></Face>
                    <h6 className="usuario">usuario parker</h6>
                </div>
                < div>
                    <button className="boton_confer">CONTACT</button>
                </div>
                <Divider />
                <div className="divC"> </div>
                <Divider />
                <div className="divC">
                    <h6>precio</h6>
                </div>
                <div className="divC"> </div>
                <Divider />
                <div className="divC">
                    {this.whatView()}
                </div>
            </div>

        );
    }

}

export default hostService;