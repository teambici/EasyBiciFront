import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Fab from '@material-ui/core/Fab';
import './Login.css'
import { Redirect } from "react-router-dom";
import image1 from '../img/LogoLogin.JPG';
import axios from 'axios';
export class Login extends React.Component{
    checkdata(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        const user={correo:email, contrasena: password, notification:localStorage.getItem("noti")};        
        console.log(user);
        axios.post('https://easybiciback.herokuapp.com/login',user)
          .then(function (response) {
              console.log(response.data.accessToken);
              localStorage.setItem("token",response.data.accessToken);
              localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("mailLogged", email);
            window.location.replace("/Services");
          })
          .catch(function (error) {
              alert("datos Incorrectos");
          });
    }

    constructor(props) {

        super(props);
        this.state = { createAcount: '', Loggin: '' }
        this.handleLoggin = this.handleLoggin.bind(this);
        this.handleCreateAcount = this.handleCreateAcount.bind(this);
    }
    handleLoggin() {

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value
        if (email !=="" && password!==""){
            this.checkdata();
        }else{
            alert("El campo de email o contraseña esta vacio");
        }
        
    }
    handleCreateAcount() {
        this.setState({ createAcount: true });
    }
    log() {
        if (localStorage.isLoggedIn === "true") {
            window.location.replace("/Services");
        }
    }
    render(){
        this.log();
        if (localStorage.getItem("isLoggedIn")) {
            return <Redirect to={{
                pathname: '/Services'
            }}
            />
        }
        if (this.state.createAcount) {
            return <Redirect to={{
                pathname: '/name'
            }}
            />
        }
        const boton={
            background:"#81d8d0"
        }
        return (
            <div className="fondo">
                <img src={image1} width="60%" />
                <form className="formulario">
                    <FormControl className="submit" >
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus />
                    </FormControl>
                    <FormControl margin="normal" >
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            id="password"                                    
                            autoComplete="current-password"
                            className="submit"
                        />
                    </FormControl>
                    <FormControl margin="normal" className="submit"  > 
                        <Fab variant="extended" aria-label="like" style={boton} onClick={this.checkdata} >                               
                            Log in
                        </Fab>
                        </FormControl>
                    <FormControl margin="normal"  >                            
                        <Button
                            className="ButtonLindo"
                            type="submit"
                            variant="raised"
                            color="primary"                            
                            onClick={this.handleCreateAcount}
                        >
                            Create Account
                        </Button>
                        </FormControl>
                </form>

            </div>


            
        );
    }

}
export default Login;

