import React, { Component } from 'react';
import bikerent from '../img/bikeex.png';
import bike from '../img/bikerent.jpg';
import { Link } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
export class BikeReserve extends Component {    
    render() {         
        const paper={
            position: "absolute",
            bottom:0,
            
        }
        const fondo={
            background:"#81d8d0",
            height:"100vh"
        }
        const title={
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
        }
        return (
            <div style={fondo}>   
                <div style={title}>
                    <h1>YOUR BIKE</h1>  
                    <CircularProgress  />
                    <h2>IS BEIGN RESERVED</h2> 
                </div>            
                            
                
            </div>

        );
    }

}
