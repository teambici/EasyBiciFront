import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import BottomMenu from "../Bottom_Menu"
import { Link } from "react-router-dom";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MenuUserLogged from "../MenuUserLogged.js"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import CardProfile from "./CardProfile.js"


export class Profile extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const divStyle = {
            display: 'flex',            
            justifyContent: 'space-around',
            alignItems:"center"
        };

        return (
            <article>
                
                <div>
                    <AppBar position="static">
                        <Toolbar>
                            <MenuUserLogged ></MenuUserLogged>  
                            <Typography color="inherit">
                                Profile
                            </Typography>
                        </Toolbar>
                    </AppBar>                    
                    <div>
                        <CardProfile ></CardProfile> 
                    </div>
                </div>               
            </article>

        )
    }
}
