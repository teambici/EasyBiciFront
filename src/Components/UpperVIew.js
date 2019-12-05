import React, { Component } from 'react';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import MenuUserLogged from "./MenuUserLogged.js"
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'; 
import AppBar from '@material-ui/core/AppBar';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Redirect } from "react-router-dom";
import NotificationsIcon from '@material-ui/icons/Notifications';
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
      background: "#81d8d0"    
    };
    const contenerdor={
      display:"flex",
      justifyContent: "space-between"
    }
    const title={
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)"
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
            <Typography variant="h6" style={title}  >
                {this.props.title}
            </Typography>
            {this.props.inNoti ?  <div></div>:<NotificationsActiveIcon onClick={this.handleNotification}></NotificationsActiveIcon>}
          </Toolbar>
        </AppBar>      
    )
  }
}
export default UpperView;
