import React, { Component } from 'react';
import UpperView from '../UpperVIew';
import { Container } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
 import StarIcon from '@material-ui/icons/Star' ;

export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = { nombre: "", documento: "" ,puntuacion:""}
    }

    componentDidMount() {
        axios.get(`https://easybiciback.herokuapp.com/User/` + localStorage.getItem("mailLogged"))
            .then(res => {
                const userList = res.data;
                this.setState({ nombre: userList.nombre, documento: userList.documento ,puntuacion: userList.puntuacion});
            })
    }
    render() {
        const color={
            color:"#EABE3F"
        }
        const barStyles = {
            display: 'block',
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 120,
            height: 120,

        };
        const tipoStyle ={
            marginTop: '35px'
        }
        const inputs = {
            minWidth: "200px",
            width: "70vw"
        };
        const inputs2 = {
            minWidth: "200px",
            width: "70vw",
            marginTop: "50px"
        };
        return (


            <div>
                <UpperView title="Profile"></UpperView>
                <Container>
                    <Avatar style={barStyles} src={"https://easybiciback.herokuapp.com/Image/" + localStorage.getItem("mailLogged")} />
                    <Typography variant="h5" style={tipoStyle} gutterBottom  >
                        {"Hey " + this.state.nombre + "!"}
                    </Typography>
                    <TextField
                        type="Read Only"
                        defaultValue={this.state.nombre}
                        id="Nombre"
                        value={this.state.nombre}
                        margin="normal"
                        style={inputs2}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        type="Read Only"
                        defaultValue={localStorage.getItem("mailLogged")}
                        id="mail"
                        margin="normal"
                        style={inputs}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        type="Read Only"
                        value={this.state.documento}
                        id="ocumento"
                        margin="normal"
                        style={inputs}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    < FingerprintIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <TextField
                        type="Read Only"
                        value={this.state.puntuacion}
                        id="puntuacion"
                        margin="normal"
                        style={inputs}
                        InputProps={{
                            readOnly: true,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <StarIcon style={color}/>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Container>

            </div>

        )
    }
}
