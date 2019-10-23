import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import MenuUserLogged from "./MenuUserLogged.js";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import bicicleta from '../img/bicicleta.jpg';
import Fab from '@material-ui/core/Fab';
import RoomServiceIcon from '@material-ui/icons/RoomService';

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
                <div >
                    <AppBar position="static">
                        <Toolbar>
                            <MenuUserLogged />                 
                            <Typography variant="h6"  >
                                Bike
                            </Typography>                        
                        </Toolbar>                     
                    </AppBar> 
                </div> 
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