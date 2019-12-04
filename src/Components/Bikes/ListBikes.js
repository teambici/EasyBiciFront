import React, { Component } from 'react';
import UpperView from '../UpperVIew';
import axios from 'axios';
import {ViñetaCiclas} from '../ViñetaCiclas'



export class ListBikes extends Component {
    constructor(props) {
        super(props);
        this.state={Bikes:[]}
    }

    componentDidMount() {
        axios.get(`https://easybiciback.herokuapp.com/Cicla`)
          .then(res => {
            const BikesList = res.data;
            this.setState({Bikes: BikesList});        
            
        })         
      }
    render() { 
        const listItems = this.state.Bikes.map((list,i) =>
            list.disponible&& <ViñetaCiclas key={i} res={list} /> 
         );   
        const lista={
            padding:0
        }

        return (
            <article>               
                <UpperView title="Bikes"></UpperView> 
                <ul style={lista}>{listItems}</ul>              
            </article>
        )
    }

}