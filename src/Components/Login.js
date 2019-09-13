import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import User from "./ImUser.js";
import './Login.css'
import CardMedia from '@material-ui/core/CardMedia';
import logo from '../img/logoF.png';



export class Login extends React.Component {
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
        this.state = { Loggin: false }
        this.handleLoggin = this.handleLoggin.bind(this);
    }
    handleLoggin(e) {
        this.checkdata();
    }
    render() {
        if (localStorage.getItem("isLoggedin")) {
            return <Redirect to={{
                pathname: '/Services'
            }}
            />
        }
        return (
            <div className="mainDiv">                
                <React.Fragment>
                    <CssBaseline />
                    <main className="layout">
                        <Paper className="paper">
                            <Link to="/">Back</Link>
                            <CardMedia
                            component="img"
                            alt="Logo"
                            align="center"
                            class="responsive"
                            image={logo}
                        title="Logo"
                    />
                            <Typography variant="headline">Ingresar</Typography>
                            <form className="form">
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input id="email" name="email" autoComplete="email" autoFocus />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </FormControl>
                                <Button
                                    onClick={this.handleLoggin}
                                    type="submit"
                                    fullWidth
                                    variant="raised"
                                    color="primary"
                                    className="submit"
                                >
                                    LOG IN
                            </Button>
                            
                            </form>
                        </Paper>
                    </main>
                </React.Fragment>
            </div>
        );
    }

}

export default Login;