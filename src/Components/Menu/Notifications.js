import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Info } from "../Info"
import { Link } from "react-router-dom";

export class Notifications extends Component {
    constructor(props) {
        super(props)
        this.state = { host: false};
        this.handleButton = this.handleButton.bind(this);
    }
    handleButton(event){
        this.setState({host: true});
    }
    


    render() {
        if (this.state.host){
            return <Redirect to={{
                pathname: '/hostService'
            }}
            />
        }
        const divStyle = {
            margin:"30px"
           
        };

        return (
            <article>
                <Link to="/profile">back</Link>
                <h1>Notifications</h1>
                <div style={divStyle} onClick={this.handleButton}>
                    <Info title="alquiler" parrafo="servicio de alquiler para Jonathan Cuesta" />
                </div>
                <div style={divStyle} onClick={this.handleButton}>
                    <Info title="alquiler" parrafo="servicio de alquiler para Alejandro Rodriguez" />

                </div>

                <div style={divStyle} onClick={this.handleButton}><Info title="alquiler" parrafo="servicio de alquiler para Sergio Peña" />    </div>

            </article>
        )
    }
}