import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "../LoginHome.css"
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { GoogleComponent } from 'react-google-location';
import Fab from '@material-ui/core/Fab';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Terms from "./Terms.js"
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { Input } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
const API_KEY = "";
export class Name extends Component {

    checkdata() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value

        if (email != "" && password != "") {
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("mailLogged", email);
            localStorage.setItem("passwordLogged", password);
            this.setState({ Loggin: true });
        }
    }

    constructor(props) {
        super(props);
        if (this.props.location.state) {
            this.state = {
                first_name: this.props.location.state.first_name, last_name: this.props.location.state.last_name,
                email: '', birthday: new Date('2014-08-18T21:11:54'), password: '', secondPassword: '', next: false,
                back: false, open: false, Accept: false, Decline: false, tarjeta: '', documento: '',latitud :null, longitud:null,file: null
            }

        } else {
            this.state = {
                first_name: '', last_name: '', email: '', password: '', secondPassword: '', next: false, back: false, open: false, Accept: false, Decline: false,
                tarjeta: '', documento: '',latitud :null, longitud:null,file: null,
            };
        }

        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSecondPassword = this.handleSecondPassword.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.handleDecline = this.handleDecline.bind(this);
        this.handleTarjeta = this.handleTarjeta.bind(this);
        this.handleDocumento = this.handleDocumento.bind(this);
        this.handleLocation = this.handleLocation.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleFirstName(event) {
        this.setState({ first_name: event.target.value });
    };
    handleLastName(event) {
        this.setState({ last_name: event.target.value });
    };
    handleEmail(event) {
        this.setState({ email: event.target.value });
    };
    handlePassword(event) {
        this.setState({ password: event.target.value });
    };
    handleSecondPassword(event) {
        this.setState({ secondPassword: event.target.value });
    };
    handleTarjeta(event) {
        this.setState({ tarjeta: event.target.value });
    }
    handleDocumento(event) {
        this.setState({ documento: event.target.value });
    }
    handleLocation(e) {
        console.log(e.coordinates);
        if (e.coordinates != "") {
            this.setState({latitud:e.coordinates.lat});
            this.setState({longitud:e.coordinates.lng})
        }

    }
    handleNext(event) {
        if (this.state.first_name && this.state.last_name && this.state.password && this.state.password == this.state.secondPassword && this.state.file!==null) {
            this.setState({ open: true });
            const newUser = {
                nombre: this.state.first_name +" "+ this.state.last_name,
                correo: this.state.email,
                tarjeta: null,
                puntuacion: 5.0,
                ubicacion: {'latitud':this.state.latitud, 'longitud':this.state.longitud},
                documento: this.state.documento,
                contrasena: this.state.password
            }
            axios.post('https://easybiciback.herokuapp.com/User', newUser).then(res => {
                console.log("post done");
            });
            let data = new FormData();
            data.append('file', this.state.file);
            axios.post('https://easybiciback.herokuapp.com/Image/'+this.state.email, data)
            .then(function (response) {
                console.log("file uploaded!", data);
            })
            .catch(function (error) {
                console.log(error);
                alert("failed file upload", error);
            }); 
        }
        else if (this.state.password == this.state.secondPassword) {
            alert("Todos los datos son requeridos")
        }
        else {
            alert("La claves no son iguales")
        }
    }
    handleBack(event) {
        event.preventDefault();
        this.setState({ back: true });
    }
    handleAccept(event) {
        event.preventDefault();
        this.checkdata();
        this.setState({ Accept: true });
    }
    handleDecline(event) {
        this.setState({ Decline: true });
    }
    handleInputChange(e) {        
        this.setState({
              file: e.target.files[0]
          });             
    }


    render() {
        const divStyle = {
            display: 'flex',
            flexDirection: 'column',
            alignItems: "center"   ,   
            marginTop:20  
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

        if (this.state.Accept) {
            return <Redirect to={{
                pathname: '/Services',
                state: { first_name: this.state.first_name, last_name: this.state.last_name }
            }}
            />
        };
        if (this.state.back) {
            return <Redirect to={{
                pathname: '/',
            }}
            />
        };
        if (this.state.Decline) {
            return <Redirect to={{
                pathname: '/'
            }}
            />
        }
        const boton={
            position:"fixed",
            right:"5%",
            bottom:"5%",
            background: "#81d8d0"

        }
        const content={
            display:"flex",
            flexDirection:"column",
            
        }
        const back={          
            margin:"5%"
        }
     
        const inputs={
            minWidth: "200px",
            width: "70vw"
        }
        const inputs2={
            minWidth: "100px",
            width: "35vw"
        }
        const InputGoogle={
            minWidth: "200px",
            width: "70vw",
            marginTop:16
        }
        return (
            <div>    
                <div style={content}>
                    <KeyboardBackspaceIcon style={back} onClick={this.handleBack}/>
                    <Typography  variant="h5"  >
                        Your information
                    </Typography>
                </div>               
                <Container >
                    <div>
                        <form style={divStyle} >                            
                            <div>
                            <TextField
                                style={inputs2}
                                type="text"
                                label="First Name"
                                id="name"
                                value={this.state.first_name}
                                onChange={this.handleFirstName}
                                margin="normal"
                            />
                            <TextField
                                style={inputs2}
                                type="text"
                                label="Last Name"
                                id="last_name"
                                value={this.state.last_name}
                                onChange={this.handleLastName}
                                margin="normal"
                            />
                            </div>
                            
                            <TextField
                                style={inputs}
                                type="email"
                                label="Email Address"
                                id="email"
                                value={this.state.email}
                                onChange={this.handleEmail}
                                margin="normal"
                            />
                           
                            <TextField
                                style={inputs}
                                type="text"
                                label="Document"
                                id="documento"
                                value={this.state.documento}
                                onChange={this.handleDocumento}
                                margin="normal"
                            />
                            <div>
                            <TextField
                                style={inputs2}
                                type="password"
                                label="Password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handlePassword}
                                margin="normal"
                            />
                            <TextField
                                style={inputs2}
                                type="password"
                                label="Repeat "
                                id="secondPassword"
                                value={this.state.secondPassword}
                                onChange={this.handleSecondPassword}
                                margin="normal"
                            />
                            </div>
                            
                            <div style={InputGoogle}>
                            <GoogleComponent                               
                                apiKey={API_KEY}
                                languaje={"en"}
                                coordinates={true}
                                onChange={this.handleLocation}
                            ></GoogleComponent>
                            </div>
                            <Container>                                
                                <Input style={InputGoogle} type="file" id="file" label="Imagen de perfil" onChange={this.handleInputChange}/>
                            </Container>
                            <Fab aria-label="add" style={boton} onClick={this.handleNext}>
                                <RightIcon />
                            </Fab>
                        </form>
                        <Dialog
                            open={this.state.open}
                        >
                            <DialogTitle id="scroll-dialog-title">Terminos y condiciones</DialogTitle>
                            <DialogContent dividers={"paper"}>
                                <DialogContentText>
                                    <Terms />
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleDecline} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={this.handleAccept} color="primary">
                                    Subscribe
                                 </Button>
                            </DialogActions>
                        </Dialog>
                    </div>                                         
                            
                   
                      
                   
                </Container>

            </div>
        )
    }
}
