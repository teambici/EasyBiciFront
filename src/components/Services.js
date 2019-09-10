import React, { Component } from 'react';
import bikerent from '../img/bikerent.jpg';
import bikepark from '../img/parking.gif';


import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import { GoogleComponent } from 'react-google-location'
import "./Services.css"
import MenuUserLogged from "./MenuUserLogged.js"
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map';
class Services extends Component {
    constructor(props) {
        super(props)
        this.state = { place: null };
    }



    render() {
        const API_KEY = "";
        return (
            <div>
                <MenuUserLogged></MenuUserLogged>

                <h2>Bienvenido {localStorage.getItem("mailLogged")}</h2>
                <h3>Buscar ciclas</h3>
                <div>
                    <Card className="insertCard">
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                id="text-todo"
                                label="Buscar Una Cicla"
                                value="{this.state.text}"
                                onChange={this.handleChange}
                                margin="normal"
                            />
                            <GoogleComponent 
                                apiKey={API_KEY}
                                languaje={"en"}
                                
                            ></GoogleComponent>

                            <p></p>


                            <p></p>
                            <Button variant="contained" color="primary" type="submit">
                                Agregar
                            </Button>
                        </form>
                    </Card>
                    <br className="fix" />

                    <Map className="Map"></Map>

                </div>





            </div >
        );
    }

}

export default Services;