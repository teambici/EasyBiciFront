import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MenuUserLogged from "./MenuUserLogged.js";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Redirect } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
export class MainBike extends Component {
    constructor(props) {
        super(props);
        this.state = { add: false };
        this.handleAdd  = this.handleAdd .bind(this);
    }
    handleAdd (event) {
        this.setState({ add: true })
    }
    
    render() {
        const Buttonstyle = {         
            position: "fixed",
            bottom: "30px",
            right:"30px"  
        };     
        if (this.state.add) {
            return <Redirect to={{
                pathname: '/NewBIke',
            }}
            />
        };
        
        return (
            <div>
                <div >
                    <AppBar position="static">
                        <Toolbar>
                            <MenuUserLogged />                 
                            <Typography variant="h6"  >
                                Your Bikes
                            </Typography>                        
                        </Toolbar>                     
                    </AppBar> 
                </div>                    
                <Fab color="primary" aria-label="add" style={Buttonstyle} onClick={this.handleAdd} ><AddIcon/></Fab> 


            </div>
           
        )
    }

}
