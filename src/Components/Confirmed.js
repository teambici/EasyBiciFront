import React, { Component } from 'react';
import "../Components/Confirmed.css";
import Divider from '@material-ui/core/Divider';
import Face from '@material-ui/icons/Face';
import { Redirect } from "react-router-dom";


class Confirmed extends Component {
    constructor(props) {
        super(props);
        this.state = { qrButton: false ,map :false};
        this.handleqrButton = this.handleqrButton.bind(this);
        this.handlemap = this.handlemap.bind(this);
    }
    handleqrButton(event){
        this.setState({qrButton:true})
    }
    handlemap(event){
        this.setState({map: true})
    }
    render() {
        if(this.state.qrButton){
            return <Redirect to={{
                pathname: '/qrGenerator'
            }}
            />
        }
        if(this.state.map){
            return <Redirect to={{
                pathname: '/Services'
            }}
            />
        }
        return (

            <div className=" Confirmed">
                <h1 className="titulo">YOUR BIKE</h1>
                <div />
                <Divider />
                <div>
                    <Face className="usuario"></Face>
                    <h6 className="usuario">usuario parker</h6>
                </div>
                < div>
                    <button className="boton_confer">CONTACT</button>
                    <button className="boton_confer" onClick={this.handlemap}>CANCEL</button>
                </div>
                <Divider />
                <div className="divC"> </div>
                <Divider />
                <div className="divC">
                    <h6>precio</h6>
                </div>
                <div className="divM"> </div>
                <Divider />
                <button className="boton_qr" onClick={this.handleqrButton}>GET YOUR QR CODE</button>
            </div>

        );
    }

}

export default Confirmed;