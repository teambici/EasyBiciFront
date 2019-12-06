import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import UpperView from '../UpperVIew';
import axios from 'axios';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import BuildIcon from '@material-ui/icons/Build';
import DescriptionIcon from '@material-ui/icons/Description';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import StarIcon from '@material-ui/icons/Star';
export class Bike extends Component {
    constructor(props) {
        super(props);      
        this.state={Check:false, booking:false,bike:{},dueno:{} ,fecha:""}        
        this.handleBooking= this.handleBooking.bind(this); 
        
    }
    componentDidMount() {      
        if (this.props.location.id){
            axios.get(`https://easybiciback.herokuapp.com/Cicla/`+this.props.location.id)
            .then(res => {
                const BikesList = res.data;
                this.setState({bike: BikesList});  
                axios.get("https://easybiciback.herokuapp.com/User/" + this.state.bike.dueno)
                .then(due => {                
                    this.setState({dueno: due.data});  
                    this.setState({fecha:this.state.bike.fechamante.split("T")[0]});     
                })                                    
            })      
        }else{
            axios.get(`https://easybiciback.herokuapp.com/Cicla/`+localStorage.getItem("lastBike"))
            .then(res => {
                const BikesList = res.data;
                this.setState({bike: BikesList});  
                axios.get("https://easybiciback.herokuapp.com/User/" + this.state.bike.dueno)
                .then(due => {                
                    this.setState({dueno: due.data});  
                    this.setState({fecha:this.state.bike.fechamante.split("T")[0]});     
                })                                    
            }) 
        }     
          
    }
    handleBooking(event) {        
        this.setState({booking: true});
    } 
    
  
    render() {  

        
              
        const buttonBooking={
            position:"fixed",
            bottom:"3%",
            left:"50%",
            transform: "translateX(-50%)"
        }   
        const divider={
            marginTop:15 
        }

        const contenedor={            
            padding:0            
        }
        const contenedor1={            
            margin:30          
        }
        const imagen={
            width:"100vw",
            height:"30vh"            
        } 
        const perfil={
            display:"flex",
            justifyContent:"space-between",      
            alignItems:"center"   
        } 
       
         
        if (this.state.booking) {
            const reserva={
                user:localStorage.getItem("mailLogged"),
                bici:this.state.bike.id,  
            }            
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
        const espacio={
            marginTop:20
        }
        const build={
            marginRight:10
        }
           
        return (
            <div>
                <UpperView title="Bike"></UpperView>                          
                <Container style={contenedor}>
                    <img style={imagen} src={"https://easybiciback.herokuapp.com/Image/"+this.state.bike.imagen}  />                         
                </Container>  
                <div style={contenedor1}>
                    <Typography variant="h5" align="left" >
                        {this.state.bike.marca} / {this.state.bike.tipo}
                    </Typography>
                    <Typography variant="h6" align="left" >
                      <b> ${this.state.bike.precio} per hour</b>
                    </Typography>
                    <div  style={perfil}>
                        <Typography variant="subtitle1" gutterBottom  align="left" >
                            Owner: {this.state.dueno.nombre}    
                        </Typography>
                        <Avatar src={"https://easybiciback.herokuapp.com/Image/"+this.state.dueno.correo}  align="right" />
                    </div> 
                    <Divider style={divider} />
                    <Typography variant="subtitle1" align="left" style={espacio} >
                        <DescriptionIcon style={build}/> {this.state.bike.descripcion} 
                    </Typography>
                    <Typography variant="subtitle1" align="left" style={espacio} >
                        <BuildIcon style={build}/> {this.state.fecha} 
                    </Typography>
                    <Typography variant="subtitle1" align="left" style={espacio} >
                        <ColorLensIcon style={build}/> {this.state.bike.color} 
                    </Typography>
                    <Typography variant="subtitle1" align="left" style={espacio} >
                        <StarIcon style={build}/> {this.state.bike.puntuacion} 
                    </Typography>
                </div>              
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