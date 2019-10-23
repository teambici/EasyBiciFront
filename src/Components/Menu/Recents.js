import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import  BottomMenu  from "../Bottom_Menu";
import { Info } from "../Info";
import { Link } from "react-router-dom";
import MenuUserLogged from "../MenuUserLogged.js";
import UpperView from '.././UpperVIew';
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
                <MenuUserLogged ></MenuUserLogged>            
                <h1>Recents</h1>
                
                <div>        
                
                    <Info title="bicicleta x" parrafo="bicileta x" component={Link} to="/Services" />
                       
                </div>                
            </article>
        )
    }
}