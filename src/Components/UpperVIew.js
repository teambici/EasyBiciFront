import React from 'react';
import '@material/react-top-app-bar/dist/top-app-bar.css';
import '@material/react-material-icon/dist/material-icon.css';
import TopAppBar, {
    TopAppBarFixedAdjust, 
    TopAppBarIcon,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
  } from '@material/react-top-app-bar';
  import MaterialIcon from '@material/react-material-icon';
  import MenuUserLogged from "./MenuUserLogged.js"
import { isUserWhitespacable } from '@babel/types';
   
  const barStyles = {
    //modificar de acuerdo a lo que se defina como color principal
    background: "blue"
};

  const Menu = () => {
    return (
        <div>
        <TopAppBar fixed="true" style={barStyles}>
          <TopAppBarRow>
            <TopAppBarSection align='start' >
                <MenuUserLogged></MenuUserLogged>
            </TopAppBarSection>
            <TopAppBarSection align='center' >
            <TopAppBarTitle className="Title">Easy Bici</TopAppBarTitle>
            </TopAppBarSection>
            
          </TopAppBarRow>
        </TopAppBar>
      </div>
    );
  }
  export default Menu;