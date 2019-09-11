import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import  BottomMenu  from "../Bottom_Menu"


export class Recents extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        
        return (
            <article>
                <h1>Recents</h1>
                <BottomMenu />
            </article>
        )
    }
}