import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import  BottomMenu  from "../Bottom_Menu";
import { Info } from "../Info";
import { Link } from "react-router-dom";


export class Recents extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        const divStyle = {
            margin:"30px"
           
        };
        
        return (
            <article>
                <h1>Recents</h1>
                <div style={divStyle}>
                    <Info title="bicicleta x" parrafo="bicileta x" component={Link} to="/Services" />
                </div>
                <BottomMenu />
            </article>
        )
    }
}