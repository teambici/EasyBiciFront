import React, { Component } from 'react';
import "./Services.css";
import MenuUserLogged from "./MenuUserLogged.js";
import Map from './Map';
import UpperView from './UpperVIew';
class Services extends Component {
    render() {
        return (
            <div>
                <UpperView title="EasyBici"></UpperView>                              
                <Map></Map>              
            </div >
        );
    }

}

export default Services;