import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Info } from "../Info";
import { Link } from "react-router-dom";
import MenuUserLogged from "../MenuUserLogged.js";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
export class Recents extends Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        const divStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center", 
            
        };
      
        const title= {
            flexGrow: 1,
          }
        
        return (
            <article > 
                <div >
                    <AppBar position="static">
                        <Toolbar>
                            <MenuUserLogged />                 
                            <Typography variant="h6"  >
                                Your Trips
                            </Typography>                        
                        </Toolbar>                     
                    </AppBar> 
                </div>                          
                <div style={divStyle}>                
                    <Info title="Bicicleta de ruta" parrafo="03/04/2019  Valor:20000 " component={Link} to="/Services" />     
                    <Info title="Bicicleta de ruta" parrafo="20/10/2019  Valor:5000" component={Link} to="/Services" />   
                                                
                </div>                
            </article>
        )
    }
}