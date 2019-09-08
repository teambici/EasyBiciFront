import React, { Component } from 'react';
import bikerent from '../img/bikeex.png';
import bike from '../img/bikerent.jpg';

class BikeReserve extends Component {
    
    render() {
        const divStyle = {
            display: 'flex',
            alignItems: 'stretccenter',
            JustifyContent: 'space-between'
        };
        return (
            <div className="BikeReserve">

                <div>
                    
                     <h1>YOUR BIKE</h1>
                     <img width='%' src={bikerent} alt="bike" />
                    <h2> IS BEIGN RESERVED </h2>
                </div>
                <div style={divStyle}>
                <div>
                    <img width='15%'src={bike} alt ="mbike" />
                    </div>
                <div > CICLA X</div>
                </div>

            </div>

        );
    }

}

export default BikeReserve;