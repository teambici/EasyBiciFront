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
import {Redirect} from "react-router-dom";
import './Login.css'


export class Login extends React.Component {
    constructor(props) {

        super(props);
        this.state = { Loggin: false }
        this.handleLoggin = this.handleLoggin.bind(this);
    }
    handleLoggin(e) {
        this.setState({ Loggin: true });
    }
    render() {
        if(this.state.Loggin){
            return <Redirect to={{
                pathname: '/Services'               
            }}
            />
        }
        const nextStyle = {
            position:'absolute',
            bottom:"10%",
            right:"5%",
            height: "45px",
            width: "45px",
            background: "green",
            borderRadius: "50%"

        };
        return (

            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Link to="/">Back</Link>
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="headline">LOG IN</Typography>
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
        );
    }

}

export default Login;