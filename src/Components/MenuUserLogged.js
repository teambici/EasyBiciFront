import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Face from '@material-ui/icons/Face';
import Menu from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';



function logOut() {
  localStorage.removeItem("isLoggedin");
  window.location.replace("/");
  
}
const styleMenu = {
  //modificar de acuerdo a lo que se defina como color principal
  background: "#3494AB",
  height:"100vh"
};
const styleButton ={
  background: "red",
  left: "23%"
}
export default function TemporaryDrawer() {

  const [state, setState] = React.useState({
    left: false
  });

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
      onKeyDown={toggleDrawer(side, false)}
    >
      <List >
        <ListItem key='User'>
          <ListItemIcon><Face></Face></ListItemIcon>
          <ListItemText primary={localStorage.getItem('mailLogged')} />
        </ListItem>

      </List>
      
      <Button variant="contained" color="secondary" onClick={logOut} style={styleButton}>
          Salir
      </Button>
      
    </div>
  );
  return (
    <div >      
      <IconButton className="btn" aria-label="Menu" onClick={toggleDrawer('left', true)}>
          <Menu></Menu>
        </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)} >
        {sideList('left')}
      </Drawer>

    </div>
  );
}