import React from 'react';
import './App.css';
import hostService from './Components/hostService';
import {Login} from './Components/Login';
import Services from './Components/Services';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Name } from "./Components/Create_acount/Name"
import { Information } from "./Components/Create_acount/Information"
import { Terms } from "./Components/Create_acount/Terms"
import { ImUser } from "./Components/ImUser"
import { Favorite } from "./Components/Menu/Favorite"
import { Profile } from "./Components/Menu/Profile"
import { Recents } from "./Components/Menu/Recents"
import { Notifications } from "./Components/Menu/Notifications"
import { Bike } from "./Components/Bike";
import { BikeReserve } from "./Components/BikeReserve";
import Confirmed from './Components/Confirmed';
import qrGenerator from "./Components/QrGenerator";
import Scanner from "./Components/Scanner"

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
          <Route path="/information" exact component={Information} />   
          <Route path="/terms" exact component={Terms} />
          <Route path="/user" exact component={ImUser} />
          <Route path="/favorites" exact component={Favorite} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/recents" exact component={Recents} />
          <Route path="/notifications" exact component={Notifications} />
          <Route path="/Confirmed" exact component={Confirmed}/>
          <Route path="/bike" exact component={Bike}/>
          <Route path="/Scanner" exact component={Scanner}/>
          <Route path="/reserve" exact component={BikeReserve}/>
          
        </div>
      </Router>
    );
  }
}

export default App;
