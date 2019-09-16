import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { Redirect } from "react-router-dom";
import image1 from '../img/logoF.png';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";



export class Login extends React.Component{
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
        this.state = { createAcount: '', Loggin: '' }
        this.handleLoggin = this.handleLoggin.bind(this);
        this.handleCreateAcount = this.handleCreateAcount.bind(this);
    }
    handleLoggin() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value
        if (email !=="" && password!==""){
            this.checkdata();
            this.setState({ Loggin: true });
        }else{
            alert("El campo de email o contraseña esta vacio");
        }
        
    }
    handleCreateAcount() {
        this.setState({ createAcount: true });
    }
    render(){
        if (localStorage.getItem("isLoggedin")) {
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
        return (
            <React.Fragment className="layout">
                <CssBaseline />
                <main className="layout">
                    
                    <Paper className="paper">
                            <img src={image1} width="60%" height="auto" />
                        
                        <Typography variant="headline">Login</Typography>
                        <form className="form">
                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                <Input id="email" name="email" autoComplete="email" autoFocus />
                            </FormControl>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    id="password"                                    
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                variant="raised"
                                color="primary"
                                className="submit"
                                onClick={this.handleLoggin}
                            >
                                Sign in
                            </Button>
                            <Button
                                className="ButtonLindo"
                                type="submit"
                                variant="raised"
                                color="primary"
                                className="submit"
                                onClick={this.handleCreateAcount}
                            >
                               Create Account
                            </Button>
                        </form>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}
export default Login;

