import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "./LoginHome.css"
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
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import IconButton from '@material-ui/core/IconButton';
import Camera from 'react-html5-camera-photo';
import axios from 'axios';
import MenuItem from '@material-ui/core/MenuItem';
import { FACING_MODES } from 'react-html5-camera-photo'

import { GoogleComponent } from 'react-google-location';

const API_KEY = "";
export class NewBike extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bike_name: '', description: '', type: '', size: '', last_mantein: new Date('2014-08-18T21:11:54')
            , cost: '', address: '', phone: '', bikeNumber: '', back: false, next: true, image: '', 
            photo: false,latitud :'', longitud: ''
        };
        this.handleBikeName = this.handleBikeName.bind(this);
        this.handleDesc = this.handleDesc.bind(this);
        this.handleType = this.handleType.bind(this);
        this.handlesize = this.handlesize.bind(this);
        this.handlelast = this.handlelast.bind(this);
        this.handlecost = this.handlecost.bind(this);
        this.handleadrress = this.handleadrress.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handlephone = this.handlephone.bind(this);
        this.onTakePhoto = this.onTakePhoto.bind(this);
        this.handlecamera = this.handlecamera.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleMaintain=this.handleMaintain.bind(this);
        this.postcicla=this.postcicla.bind(this);

    }
    handlecamera() {
        this.setState({ photo: true })
    }
    onTakePhoto(event) {
        alert("entra")
        this.setState({ image: event });
        this.setState({ photo: false });
    }
    handleLocation(e) {
        console.log(e.coordinates);
        if (e.coordinates != "") {
            this.setState({ latitud: e.coordinates.lat });
            this.setState({ longitud: e.coordinates.lng })
        }

    }
    handleBikeName(event) {
        this.setState({ bike_name: event.target.value });
    };
    handleDesc(event) {
        this.setState({ description: event.target.value });
    }
    handleType(event) {
        this.setState({ type: event.target.value });
    }
    handleMaintain(event){
        console.log(event);
        this.setState({last_mantein:event});
    }
    handlesize(event) {
        this.setState({ size: event.target.value });
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
    handleNext(event) {
        if (this.state.description && this.state.type && this.state.last_mantein && this.state.bikeNumber) {
            const newUser = {
                descripcion: this.state.description,
                puntuacion: 5.0,
                imagen: "null",
                disponible: "true",
                dueno: localStorage.getItem("mailLogged"),
                tipo:this.state.type,
                fechamante: this.state.last_mantein,
                ubicacion: {'latitud':this.state.latitud, 'longitud':this.state.longitud},
            }
            axios.post('https://easybiciback.herokuapp.com/Cicla', newUser).then(res => {
                console.log("post done");
            });
            this.setState({ back: true });
        } else {
            alert("Todos los campos son obligatorios")
        }
    }
    postcicla(){
        const cicla={
            descripcion:this.state.description,
            puntuacion:5.0,
            imagen:null,
            disponible:true,
            dueno:localStorage.getItem("mailLogged")
        }
        axios.post("http://localhost:8080/Cicla",cicla).then(window.location.replace("/services"));
    }
    render() {
        const estates = [
            { type: "Urbana" }, { type: "De Montaña" }, { type: "De Ruta" },{ type: "Plegable" },{ type: "BMX" },{ type: "Electrica" }
          ]
        const divStyle = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        };
        const useStyles = makeStyles(theme => ({
            fab: {
                position: 'absolute',
                bottom: theme.spacing(2),
                left: theme.spacing(-5),
            },
            fab1: {
                position: 'absolute',
                bottom: theme.spacing(2),
                right: theme.spacing(5),
            },
        }));
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
                    <h1 align="center">New Bike</h1>
                    <Container>
                        <div >
                            <form style={divStyle} >
                                <TextField
                                    id="BikeType"
                                    select
                                    label="Bike Type"
                                    onChange={this.handleType}
                                    value={this.state.type}
                                >
                                    {estates.map(option => (
                                        <MenuItem key={option.type} value={option.type}>
                                            {option.type}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    type="text"
                                    label="Description"
                                    id="Description"
                                    value={this.state.description}
                                    onChange={this.handleDesc}
                                    margin="normal"
                                />
                                <TextField
                                    type="text"
                                    label="Bike code"
                                    id="BikeNumber"
                                    value={this.state.bikeNumber}
                                    onChange={this.handleNumber}
                                    margin="normal"
                                />
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>

                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="mantain"
                                        label="Ultima fecha de mantenimiento"
                                        format="MM/dd/yyyy"
                                        value={this.state.last_mantein}
                                        selected={this.state.last_mantein}
                                        onChange={this.handleMaintain}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </MuiPickersUtilsProvider>

                                <GoogleComponent
                                    apiKey={API_KEY}
                                    languaje={"en"}
                                    label="ADRRESS"
                                    coordinates={true}
                                    onChange={this.handleLocation}
                                ></GoogleComponent>
                                <IconButton
                                    color="primary"
                                    aria-label="selectpicture"
                                    component="span"
                                >
                                    <input type="file" />
                                </IconButton>
                            </form>
                        </div>
                        <div>
                            <Fab color="primary" aria-label="add" className={useStyles.fab} onClick={this.handleBack}>
                                <LeftIcon />
                            </Fab>
                            <Fab color="primary" aria-label="add" className={useStyles.fab1} onClick={this.postcicla}>
                                <RightIcon />
                            </Fab>
                        </div>
                    </Container>
                </div>
            )
        }
    }
}

