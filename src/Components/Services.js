import React, { Component } from 'react';
import "./Services.css";
import Map from './Map';
import UpperView from './UpperVIew';
import Fab from '@material-ui/core/Fab';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import { Redirect } from "react-router-dom";
class Services extends Component {
    constructor(props) {
        super(props)
        this.state = { List: false};
        this.handleList = this.handleList.bind(this);
    }
    handleList(event){
        this.setState({List: true});
    }
    render() {
        const content={
           display:"flex",  
           flexDirection:"column"               
        }
        const button={
            background: "#81d8d0" ,
            bottom:15,
            right:15 ,
            position: "fixed"
        }
        const icon={            
            marginRight:10,                 
        }
        if (this.state.List){
            return <Redirect to={{
                pathname: '/notifications'
            }}
            />
        }

        return (
            <div style={content}>
                <UpperView title="EasyBici"></UpperView>                              
                <Map></Map>  
                <Fab  variant="extended" color="primary" style={button} onClick={this.handleList}>
                    <DirectionsBikeIcon style={icon}/>
                    List
                </Fab>

            </div >
        );
    }

}

export default Services;