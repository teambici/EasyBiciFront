import React, { Component } from 'react';
import bikerent from '../img/bikeex.png';
import bike from '../img/bikerent.jpg';
import { Link } from "react-router-dom";
export class BikeReserve extends Component {
    
    render() {
        const divStyle = {
            display: 'flex',
            alignItems: 'stretccenter',
            JustifyContent: 'space-between'
        };
        return (
            <div className="BikeReserve">
                <Link to="/bike">back</Link>
                <div>                    
                     <h1>YOUR BIKE</h1>
                     <img width='%' src={bikerent} alt="bike" />
                    <h2> IS BEIGN RESERVED </h2>
                </div>
                

            </div>

        );
    }

}
