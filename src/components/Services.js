import React, { Component } from 'react';
import bikerent from '../img/bikerent.jpg';
import bikepark from '../img/parking.gif';
class Services extends Component {


    render() {
        const divStyle = {
            display: 'flex',
            alignItems: 'stretch',
            JustifyContent: 'space-between'
        };
        const right = {
            marginLeft: '1px',
            marginRight: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '110px'

        }
        const left = {
            marginLeft: 'auto',
            marginRight: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '110px'

        }
        console.log();
        return (

            <div className="Services">

                <div>

                    <h3>EasyBici services  </h3>
                    <h1>What are you going to do today?</h1>
                    <div style={divStyle}>
                        <div style={left}>
                            BIKE RENT
                        </div>
                        <div style={right} >
                            BIKE PARKING
                        </div>

                    </div>
                    <div style={divStyle}>
                        <div style={left}>
                        <img  src={bikerent} alt ="bike" />

                        </div>
                        <div style={right}>
                            <img src={bikepark} alt="park"/>
                        </div>
                    </div>

                </div>

            </div>


        );
    }

}

export default Services;