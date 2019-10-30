import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import bicicleta from '../img/bicicleta.jpg';
import Fab from '@material-ui/core/Fab';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import UpperView from './UpperVIew';


export class Bike extends Component {
    constructor(props) {
        super(props);
        this.state={Check:false, booking:false}        
        this.handleBooking= this.handleBooking.bind(this);
    }
    handleBooking(event) {        
        this.setState({booking: true});
    } 
    
  
    render() {  
        const barStyles = {
            //modificar de acuerdo a lo que se defina como color principal
            background: "#81d8d0"
        }; 
        const imagen={
            height: "inherit"
        }   
        const buttonBooking={
            position:"fixed",
            bottom:"3%",
            left:"50%",
            transform: "translateX(-50%)"
        }    
        if (this.state.booking) {
            return <Redirect to={{
                pathname: '/reserve'               
            }}
            />
        }              
        return (
            <div>
                <UpperView title="Bike"></UpperView>
                <div  >
                    <GridList  cols={1}>                        
                        <GridListTile >
                            <img src={bicicleta}   style={imagen} />
                            <GridListTileBar
                                title={"Bicicleta de ruta"}                           
                            />
                        </GridListTile>
                        ))}
                    </GridList>
                </div>  
                <div style={buttonBooking}>
                    <Fab
                        variant="extended"
                        size="large"
                        color="secondary"
                        aria-label="add"
                        onClick={this.handleBooking}>
                        <RoomServiceIcon  />
                        Booking
                    </Fab>
                </div>  
            </div>
        )
    }
}

export default Bike;