import React, { Component } from 'react';
import bikerent from '../img/bikerent.jpg';
import bikepark from '../img/parking.gif';






import "./Services.css";
import MenuUserLogged from "./MenuUserLogged.js"
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Map from './Map';
import UpperView from './UpperVIew';
class Services extends Component {
    render() {
        return (
            <div>
                <UpperView></UpperView>
                <MenuUserLogged ></MenuUserLogged>                
                <Map></Map>              
            </div >
        );
    }

}

export default Services;