import React from 'react';
import UpperView from '../UpperVIew';
import axios from 'axios';
import {Notification} from '../Notification'
export class Recents extends React.Component {
    constructor(props) {
        super(props)
        this.state={bike:""}    
    }

    componentDidMount() {
        axios.get(`https://easybiciback.herokuapp.com/Cicla/cos/`+localStorage.getItem("mailLogged"))
          .then(res => {
            
            const BikesList = res.data;
            console.log(BikesList)
            this.setState({bike: BikesList}); 
          })
          console.log(this.state.bike)
      }  
    

    render() {
        const contenerdor={
            margin:0,
            padding:0
  
        }
        const items = this.state.reservas;
        
         
        
        return (
            <article > 
                <UpperView title="Your Trips"></UpperView>                                       
                <ul style={contenerdor} >{this.state.reservas}</ul>  
            </article>
        )
    }
}