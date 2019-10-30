import React, { Component } from 'react';
import { Info } from "../Info";
import { Link } from "react-router-dom";
import UpperView from '../UpperVIew';
export class Recents extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        const divStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            
        };
      
        const barStyles = {
            //modificar de acuerdo a lo que se defina como color principal
            background: "#81d8d0"
        };
        return (
            <article > 
                <UpperView title="Your Trips"></UpperView>                                        
                <div style={divStyle}>                
                    <Info title="Bicicleta de ruta" parrafo="03/04/2019  Valor:20000 " component={Link} to="/Services" />     
                    <Info title="Bicicleta de ruta" parrafo="20/10/2019  Valor:5000" component={Link} to="/Services" />   
                                                
                </div>                
            </article>
        )
    }
}