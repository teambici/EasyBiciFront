import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Fab from '@material-ui/core/Fab';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Camera from 'react-html5-camera-photo';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import { FACING_MODES } from 'react-html5-camera-photo'
import { Input } from '@material-ui/core';
import { GoogleComponent } from 'react-google-location';
import uuid from 'react-uuid';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const API_KEY = "AIzaSyBhtU1mcWPQzqOXFXwXwVnfTN8UhEQ-t5I";
export class NewBike extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '', type: '', last_mantein: new Date('2014-08-18T21:11:54')
            , cost: '', address: '', bikeNumber: '', back: false, next: true, image: '', 
            photo: false,latitud :'', longitud: '',colour:'',brand:''
        }; 
        this.handleColour= this.handleColour.bind(this)      
        this.handleBrand= this.handleBrand.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleType = this.handleType.bind(this);     
        this.handlelast = this.handlelast.bind(this);
        this.handlecost = this.handlecost.bind(this);
        this.handleadrress = this.handleadrress.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleBack = this.handleBack.bind(this);          
        this.handleLocation = this.handleLocation.bind(this);
        this.handleMaintain=this.handleMaintain.bind(this);
        this.postcicla=this.postcicla.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

    }    
    handleColour(e){
    
        this.setState({colour:e.target.value})
    } 
    handleLocation(e) {       
        if (e.coordinates != "") {
            this.setState({ latitud: e.coordinates.lat });
            this.setState({ longitud: e.coordinates.lng })
        }
    }    
    handleDesc(event) {
        this.setState({ description: event.target.value });
    }
    handleType(event) {
        this.setState({ type: event.target.value });
    }
    handleMaintain(event){        
        this.setState({last_mantein:event});
    }    
    handlelast(event) {
        this.setState({ last_mantein: event });
    };
    handlecost(event) {
        this.setState({ cost: event.target.value });
    }
    handleadrress(event) {
        this.setState({ address: event.target.value });
    }
    handlephone(event) {
        this.setState({ phone: event.target.value });
    }
    handleNumber(event) {
        this.setState({ bikeNumber: event.target.value });
    }
    handleBack(event) {
        event.preventDefault();
        this.setState({ back: true });
    }
    handleBrand(event){
        this.setState({ brand: event.target.value });
    }
    handleInputChange(e) {        
        this.setState({
              file: e.target.files[0]
          });             
    }
    
    postcicla(){
        const fotcicla=uuid();
        let data = new FormData();
        data.append('file', this.state.file);
        axios.post('https://easybiciback.herokuapp.com/Image/'+fotcicla, data)
        .then(function (response) {
            console.log("file uploaded!", data);
        })
        .catch(function (error) {
            console.log(error);
            alert("failed file upload", error);
    }); 
        const cicla={
            descripcion:this.state.description+"   bikecode = "+this.state.bikeNumber,
            puntuacion:5.0,
            imagen:fotcicla,
            disponible:true,
            dueno:localStorage.getItem("mailLogged"),
            tipo: this.state.type,
            fechamante:this.state.last_mantein,
            precio:this.state.cost,
            color:this.state.colour,
            marca:this.state.brand,
            ubicacion:{'latitud':this.state.latitud, 'longitud':this.state.longitud}            
        }
        console.log(cicla)
        axios.post("https://easybiciback.herokuapp.com/Cicla",cicla).then(window.location.replace("/services"));

       
    }
    render() {
        const estates = [
            { type: "Urbana" }, { type: "De Montaña" }, { type: "De Ruta" },{ type: "Plegable" },{ type: "BMX" },{ type: "Electrica" }
          ]
        const divStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center"   ,   
            marginTop:20  
        };
        const back={          
            margin:"5%"
        }
        const content={
            display:"flex",
            flexDirection:"column",            
        }
        const inputs={
            minWidth: "200px",
            width: "70vw"
        }
        const inputs2={
            minWidth: "100px",
            width: "35vw"
        }
        const boton={
            position:"fixed",
            right:"5%",
            bottom:"5%",
            background: "#81d8d0"

        }

        const InputGoogle={
            minWidth: "200px",
            width: "70vw",
            marginTop:16
        }
        
       
        if (this.state.back) {
            return <Redirect to={{
                pathname: '/',
            }}
            />
        };
        if (this.state.photo) {
            return (<Camera
                onTakePhoto={(dataUri) => { this.onTakePhoto(dataUri); }}
                idealFacingMode={FACING_MODES.ENVIRONMENT}
                idealResolution={{ height: 1334 }}
                imageCompression={0.5}
                isMaxResolution={false}
                isImageMirror={false}
                isSilentMode={true}
                isDisplayStartCameraError={true}
            />)
        } else {
            return (
                <div >
                    <div style={content}>
                        <KeyboardBackspaceIcon style={back} onClick={this.handleBack}/>
                        <Typography  variant="h5"  >
                           New Bike
                        </Typography>
                    </div>   
                    <Container>
                        <div >
                            <form style={divStyle} >
                                <Container style={{marginTop:"15px"}}>       
                                    <Typography variant="h6" color="textSecondary" >
                                        Bike picture
                                    </Typography>                         
                                    <Input style={InputGoogle} type="file" id="file" label="Imagen de perfil" onChange={this.handleInputChange}/>
                                </Container> 
                                <div>
                                    <TextField
                                        id="BikeType"
                                        select
                                        label="Bike Type"
                                        onChange={this.handleType}
                                        value={this.state.type}
                                        style={inputs2}
                                                                            >
                                        {estates.map(option => (
                                            <MenuItem key={option.type} value={option.type}>
                                                {option.type}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        type="text"
                                        label="Colour"
                                        id="Colour"   
                                        value={this.state.colour}                                                         
                                        onChange={this.handleColour}
                                        style={inputs2}
                                    />
                                </div>                                
                                <TextField
                                    type="text"
                                    label="Description"
                                    id="Description"
                                    value={this.state.description}
                                    onChange={this.handleDesc}
                                    margin="normal"
                                    style={inputs}
                                />
                                <TextField
                                    type="text"
                                    label="Bike code"
                                    id="BikeNumber"
                                    value={this.state.bikeNumber}
                                    onChange={this.handleNumber}
                                    margin="normal"
                                    style={inputs}
                                />
                                <div>
                                    <TextField
                                        type="number"
                                        label="Price per hour"
                                        id="Price"                                                                      
                                        margin="normal"
                                        value={this.state.cost}
                                        onChange={this.handlecost}
                                        style={inputs2}
                                    />
                                    <TextField
                                        type="text"
                                        label="Brand"
                                        id="Brand"                                                                   
                                        margin="normal"
                                        value= {this.state.brand}
                                        onChange ={this.handleBrand}
                                        style={inputs2}
                                    />                                
                                </div>                                
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker
                                        style={inputs}
                                        margin="normal"
                                        id="mantain"
                                        label="Last maintenance"
                                        format="MM/dd/yyyy"
                                        value={this.state.last_mantein}
                                        selected={this.state.last_mantein}
                                        onChange={this.handleMaintain}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>
                                <div  style={InputGoogle}>
                                <GoogleComponent
                                   
                                    apiKey={API_KEY}
                                    languaje={"en"}
                                    label="ADRRESS"
                                    coordinates={true}
                                    onChange={this.handleLocation}
                                ></GoogleComponent>

                                </div>
                                                 
                            </form>
                        </div>
                        <div>                           
                            <Fab color="primary" aria-label="add" style={boton}  onClick={this.postcicla}>
                                <RightIcon />
                            </Fab>
                        </div>
                    </Container>
                </div>
            )
        }
    }
}

