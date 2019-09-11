import React, { Component } from 'react';
import bikerent from '../img/bikerent.jpg';
import bikepark from '../img/parking.gif';
import  BottomMenu  from "./Bottom_Menu"






import "./Services.css";
import MenuUserLogged from "./MenuUserLogged.js"
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map';
class Services extends Component {
  



    render() {
        
        return (
            <div>
               

                <h2>Bienvenido {localStorage.getItem("mailLogged")}</h2>
                <h3>Buscar ciclas</h3>
                <Map></Map>
                

                <BottomMenu/>



            </div >
        );
    }

}

export default Services;