import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "./LoginHome.css";
import imagen1 from "../img/logoF.png";
import fondo11 from "../img/fondo.jpg"

export class LoginHome extends Component {
    constructor(props) {

        super(props);
        this.state = { createAcount: '', Loggin: '' }
        this.handleLoggin = this.handleLoggin.bind(this);
        this.handleCreateAcount = this.handleCreateAcount.bind(this);
    }
    handleLoggin(event) {
        this.setState({ Loggin: true });
    }
    handleCreateAcount(event) {
        this.setState({ createAcount: true });
    }

    render() {
        if (localStorage.getItem("isLoggedin")) {
            return <Redirect to={{
                pathname: '/Services'
            }}
            />
        }
        if (this.state.createAcount) {
            return <Redirect to={{
                pathname: '/name'
            }}
            />
        }
        if (this.state.Loggin) {
            return <Redirect to={{
                pathname: '/login'
            }}
            />
        }
        const { history } = this.props;
        return (
            <div>
                <img src={imagen1} />
                <div >
                    <button className="boton_personalizado" onClick={this.handleLoggin} >Login</button>
                    <button className="boton_personalizado" onClick={this.handleCreateAcount}>CreateAcount</button>
                </div>
            </div>
        )
    }
}
