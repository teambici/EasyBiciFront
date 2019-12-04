import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import UpperView from '../UpperVIew';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
export class Bike extends Component {
    constructor(props) {
        super(props);      
        this.state={Check:false, booking:false,bike:{} }        
        this.handleBooking= this.handleBooking.bind(this);      
        console.log("1")
    }
    componentDidMount() {      
        axios.get(`https://easybiciback.herokuapp.com/Cicla/`+this.props.location.id)
          .then(res => {
            const BikesList = res.data;
            this.setState({bike: BikesList});   
            console.log(this.state.bike)                         
        })     
          
    }
    handleBooking(event) {        
        this.setState({booking: true});
    } 
    
  
    render() {  
        const barStyles = {
            //modificar de acuerdo a lo que se defina como color principal
            background: "#81d8d0"
        }; 
        const buttonBooking={
            position:"fixed",
            bottom:"3%",
            left:"50%",
            transform: "translateX(-50%)"
        }   
        const imagen={
            width:"80vw",
            
        } 
        if (this.state.booking) {
            const reserva={
                user:localStorage.getItem("mailLogged"),
                bici:this.state.bike.id,         

            }
            console.log(reserva)
            axios.post(`https://easybiciback.herokuapp.com/Reserva`,reserva)
            .then(function(){  
                                                  
            })
            .catch(function(){
                console.log("fallo todo")
            })  
            return <Redirect to={{
                pathname: '/reserve'               
            }}
            />  
            
        }              
        return (
            <div>
                <UpperView title="Bike"></UpperView>                          
                <Container>
                    <img style={imagen} src={"https://easybiciback.herokuapp.com/Image/"+this.state.bike.imagen}  />                         
                </Container>    
                <Typography variant="body1" color="textSecondary" component="p">
                   Owner : {this.state.bike.dueno}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Maintenance date : {this.state.bike.fechamante}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Type : {this.state.bike.tipo}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    Score :{this.state.bike.puntuacion}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                   Description : {this.state.bike.descripcion}
                </Typography>     
                <Fab
                    style={buttonBooking}
                    variant="extended"
                    size="large"
                    color="secondary"
                    aria-label="add"
                    onClick={this.handleBooking}>
                    <RoomServiceIcon  />
                    Booking
                </Fab>
                  
            </div>
        )
    }
}

export default Bike;