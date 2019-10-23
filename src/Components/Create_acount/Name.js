import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "../LoginHome.css"
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
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

export class Name extends Component {

    checkdata() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value

        if (email != "" && password != "") {
            localStorage.setItem("isLoggedin", true);
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
                back: false, open: false, Accept: false, Decline: false, tarjeta: '', documento: '',
            }

        } else {
            this.state = {
                first_name: '', last_name: '', email: '', password: '', secondPassword: '', next: false, back: false, open: false, Accept: false, Decline: false,
                tarjeta: '', documento: ''
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
    handleNext(event) {
        event.preventDefault();
        if (this.state.first_name && this.state.last_name && this.state.password && this.state.password == this.state.secondPassword) {
            this.setState({ open: true });
            const newUser = {
                nombre: this.state.first_name + this.state.last_name,
                correo: this.state.email,
                tarjeta: this.state.tarjeta,
                puntuacion: 5.0,
                ubicacion: null,
                documento: this.state.documento,
                contraseña: this.state.password
            }
            axios.post('https://easybiciback.herokuapp.com/User', newUser).then(res => {
                console.log("post done");
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


    render() {
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


        return (
            <div >
                <h1 align="center">Informacion de registro</h1>
                <Container>
                    <div>
                        <form style={divStyle} >
                            <TextField
                                type="text"
                                label="FIRST NAME"
                                id="name"
                                value={this.state.first_name}
                                onChange={this.handleFirstName}
                                margin="normal"
                            />
                            <TextField
                                type="text"
                                label="LAST NAME"
                                id="last_name"
                                value={this.state.last_name}
                                onChange={this.handleLastName}
                                margin="normal"
                            />
                            <TextField
                                type="email"
                                label="EMAIL ADDRESS"
                                id="email"
                                value={this.state.email}
                                onChange={this.handleEmail}
                                margin="normal"
                            />
                            <TextField
                                type="text"
                                label="CREDIT CARD"
                                id="tarjeta"
                                value={this.state.tarjeta}
                                onChange={this.handleTarjeta}
                                margin="normal"
                            />
                            <TextField
                                type="text"
                                label="DOCUMENT"
                                id="documento"
                                value={this.state.documento}
                                onChange={this.handleDocumento}
                                margin="normal"
                            />
                            <GoogleComponent
                                style={barStyles}
                                apiKey={API_KEY}
                                languaje={"en"}
                                coordinates={true}
                            ></GoogleComponent>
                            <TextField
                                type="password"
                                label="Password"
                                id="password"
                                value={this.state.password}
                                onChange={this.handlePassword}
                                margin="normal"
                            />
                            <TextField
                                type="password"
                                label="REPEAT PASSWORD"
                                id="secondPassword"
                                value={this.state.secondPassword}
                                onChange={this.handleSecondPassword}
                                margin="normal"
                            />
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

                    <div>
                        <Box display="flex" justifyContent="center" m={1} p={1}>
                            <Fab color="primary" aria-label="add" onClick={this.handleBack} className={useStyles.fab}>
                                <LeftIcon />
                            </Fab>
                            <Fab color="primary" aria-label="add" onClick={this.handleNext} className={useStyles.fab1}>
                                <RightIcon />
                            </Fab>
                        </Box>
                    </div>
                </Container>

            </div>
        )
    }
}