import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import BottomMenu from "../Bottom_Menu"
import parker from '../../img/Parker.jpg';
import { Link } from "react-router-dom";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import NavBar from './NavBarProfile'

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
                <div style={divStyle}>
                    <NavBar />
                    <img width='15%' src={parker} alt="mparker" />
                    <div>
                        <h1>Profile</h1>
                        <Link to="/user">View profile</Link>
                    </div>
                   
                    <Link to="/notifications"><NotificationsActiveIcon  /></Link>
                </div>


                <BottomMenu />
            </article>

        )
    }
}