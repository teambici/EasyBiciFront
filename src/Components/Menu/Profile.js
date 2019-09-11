import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import BottomMenu from "../Bottom_Menu"


export class Profile extends Component {
    constructor(props) {
        super(props)
    }


    render() {

        return (
            <article>
                <h1>Profile</h1>
                <BottomMenu />
            </article>

        )
    }
}