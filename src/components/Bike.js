import React, { Component } from 'react';
import bikerent from '../img/bikerent.jpg';
class Bike extends Component {


    render() {
        return (
            <div className="Bike">

                <div>
                    <img width='30%' src={bikerent} alt="bike" />
                    <h2> Bicicleta de Carreras </h2>

                </div>

            </div>

        );
    }

}

export default Bike;