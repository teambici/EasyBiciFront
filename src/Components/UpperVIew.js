import React, { Component } from 'react';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import MenuUserLogged from "./MenuUserLogged.js"
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'; 
import AppBar from '@material-ui/core/AppBar';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Redirect } from "react-router-dom";
export class UpperView extends Component { 
  constructor(props) {
    super(props);
    this.state = { notification : false };
    this.handleNotification = this.handleNotification.bind(this);
  }
  handleNotification(event){
    this.setState({notification:true});
  }

  render() {
    const barStyles = {
      //modificar de acuerdo a lo que se defina como color principal
      background: "#81d8d0"    
    };
    const contenerdor={
      display:"flex",
      justifyContent: "space-between"
    }
    if (this.state.notification) {
      return <Redirect to={{
          pathname: '/notifications'               
      }}
      />
  }    
    return (    
        <AppBar position="static" style={barStyles}>
          <Toolbar style={contenerdor}>
            <MenuUserLogged />
            <Typography variant="h6"  >
                {this.props.title}
            </Typography>
            {this.props.inNoti ?  <div></div>:<NotificationsActiveIcon  onClick={this.handleNotification}/>}
          </Toolbar>
        </AppBar>      
    )
  }
}
export default UpperView;
