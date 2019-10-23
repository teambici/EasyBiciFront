import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ExploreIcon from '@material-ui/icons/Explore';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MapIcon from '@material-ui/icons/Map';
import { Redirect } from "react-router-dom";
function logOut() {
  localStorage.removeItem("isLoggedin");
  window.location.replace("/");  
}
const styleMenu = {
  //modificar de acuerdo a lo que se defina como color principal
  background: "#00000",
  height:"100vh"
};
const styleButton ={   
  position:"absolute",
  bottom:5,
  right:5,


}
const styleAvatar={
  height:50,
  width:50,
}
const styleDrawer={

  width:240,
}
const back={
  background:"white"
}
export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false,
  });
  const [profile, setProfile] = React.useState(false);
  const goProfile = (site) => event=> {    
    setProfile(site);   
  };

  const [trips, setTrips] = React.useState(false);
  const goTrips = (site) => event=> {    
    setTrips(site);   
  };

  const [bikes, setBikes] = React.useState(false);
  const goBikes = (site) => event=> {    
    setBikes(site);   
  };

  const [map, setMap] = React.useState(false);
  const goMap = (site) => event=> {    
    setMap(site);   
  };
  
  const name=localStorage.getItem("mailLogged").charAt(0);  
  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };
  const sideList = side => (
    <div  style={styleMenu}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)} >
      <List  style={styleDrawer} >
        <ListItem button onClick={goProfile(true)} >
          <ListItemIcon><Avatar style={styleAvatar} >{name}</Avatar></ListItemIcon>
          <ListItemText primary={localStorage.getItem('mailLogged')}></ListItemText>     
          {profile &&  <Redirect to={{  pathname: '/Profile' }}/>}     
        </ListItem>
      </List>
      <Divider />
      <List style={back}>
        <ListItem button onClick={goMap(true)} >
          <ListItemIcon><MapIcon/></ListItemIcon>
          <ListItemText primary="Map" ></ListItemText>          
          {map &&  <Redirect to={{  pathname: '/services' }}/>} 
        </ListItem>
        <ListItem button onClick={goTrips(true)} >
          <ListItemIcon><ExploreIcon/></ListItemIcon>
          <ListItemText primary="Your Trips" ></ListItemText>          
          {trips &&  <Redirect to={{  pathname: '/recents' }}/>} 
        </ListItem>
        <ListItem button onClick={goBikes(true)}>
          <ListItemIcon><DirectionsBikeIcon/></ListItemIcon>
          <ListItemText primary="Your Bikes" ></ListItemText>      
          {bikes &&  <Redirect to={{  pathname: '/Bikes' }}/>}     
        </ListItem>       
      </List>   
      <Divider />       
      <ExitToAppIcon onClick={logOut} style={styleButton}/>
    </div>
  );
  return (
    
    <div >      
      <IconButton className="btn" aria-label="Menu" color="inherit" onClick={toggleDrawer('left', true)}>
          <Menu></Menu>
      </IconButton>
      <Drawer open={state.left} style={styleDrawer} onClose={toggleDrawer('left', false)} >
        {sideList('left')}
      </Drawer>

    </div>
  );
}