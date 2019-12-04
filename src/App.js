import React from 'react';
import './App.css';
import hostService from './Components/hostService';
import {Login} from './Components/Login';
import Services from './Components/Services';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Name } from "./Components/Create_acount/Name"
import { Terms } from "./Components/Create_acount/Terms"
import { Profile } from "./Components/Menu/Profile"
import { Recents } from "./Components/Menu/Recents"
import { Notifications } from "./Components/Menu/Notifications"
import { Bike } from "./Components/Bikes/Bike";
import { BikeReserve } from "./Components/Bikes/BikeReserve";
import Confirmed from './Components/Confirmed';
import qrGenerator from "./Components/QrGenerator";
import Scanner from "./Components/Scanner";
import {NewBike} from "./Components/Bikes/NewBike"; 
import {MainBike} from "./Components/Bikes/MainBike"; 
import {ListBikes} from "./Components/Bikes/ListBikes"; 

import {isIOS} from 'react-device-detect';
localStorage.setItem("isIos",isIOS)
if(!JSON.parse(localStorage.getItem("isIos"))){  
  const firebase = require("firebase");
  const firebaseConfig = {
    apiKey: "AIzaSyCPSRE1oV0k1IToX5sxj9oK5TiRSjsGRuk",
    authDomain: "easybici-75d31.firebaseapp.com",
    databaseURL: "https://easybici-75d31.firebaseio.com",
    projectId: "easybici-75d31",
    storageBucket: "easybici-75d31.appspot.com",
    messagingSenderId: "519777958549",
    appId: "1:519777958549:web:4315b3c5ec91054d46b99c",
    measurementId: "G-7XW8PB67F4"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging=firebase.messaging();
  messaging.requestPermission()
  .then(function(){
    return messaging.getToken();
  })
  .then(function(token){    
    localStorage.setItem("noti",token)
  })
  .catch(function(err){
    console.log(err);
  })
  messaging.onMessage(function(payload){
    
  });
}




class App extends React.Component {

  render() {
  
    return (
      <Router>
        <div className="App color_fondo">
          <Route path="/" exact component={Login} />
          <Route path="/qrGenerator" exact component={qrGenerator} />
          <Route path="/Services" exact component={Services} />  
          <Route path="/hostService" exact component={hostService} />   
          <Route path="/name" exact component={Name} />      
          <Route path="/terms" exact component={Terms} />       
          <Route path="/profile" exact component={Profile} />
          <Route path="/recents" exact component={Recents} />
          <Route path="/notifications" exact component={Notifications} />
          <Route path="/Confirmed" exact component={Confirmed}/>
          <Route path="/bike" exact component={Bike}/>
          <Route path="/Scanner" exact component={Scanner}/>
          <Route path="/reserve" exact component={BikeReserve}/>
          <Route path="/NewBIke" exact component={NewBike}/>
          <Route path="/Bikes" exact component={MainBike}/>
          <Route path="/ListBikes" exact component={ListBikes}/>
        </div>
      </Router>
    );
  }
}

export default App;
