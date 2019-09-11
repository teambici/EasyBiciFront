import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Info } from "../Info"
import { Link } from "react-router-dom";

export class Notifications extends Component {
    constructor(props) {
        super(props)
    }
    


    render() {
        const divStyle = {
            margin:"30px"
           
        };

        return (
            <article>
                <Link to="/profile">back</Link>
                <h1>Notifications</h1>
                <div style={divStyle}>
                    <Info title="alquiler" parrafo="servicio de alquiler para Jonathan Cuesta" />
                </div>
                <div style={divStyle}>
                    <Info title="alquiler" parrafo="servicio de alquiler para Alejandro Rodriguez" />

                </div>

                <div style={divStyle}><Info title="alquiler" parrafo="servicio de alquiler para Sergio Peña" />    </div>

            </article>
        )
    }
}