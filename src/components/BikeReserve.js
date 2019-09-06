import React, { Component } from 'react';
import bikerent from '../img/bikeex.png';
class BikeReserve extends Component {


    render() {
        return (
            <div className="BikeReserve">

                <div>
                    
                     <h1>YOUR BIKE</h1>
                     <img width='%' src={bikerent} alt="bike" />
                    <h2> IS BEIGN RESERVED </h2>
                </div>

            </div>

        );
    }

}

export default BikeReserve;