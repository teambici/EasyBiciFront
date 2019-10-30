import React, { Component } from 'react';
import UpperView from './UpperVIew';
import axios from 'axios';
import { Info } from "./Info";
import { Redirect} from "react-router-dom";
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
            list.disponible&& <Info key={i} title={list.tipo} parrafo={list.descripcion} id={list.id} /> 
         );   
         const format={
            paddingInlineEnd: 40
         }    

        return (
            <article>               
                <UpperView title="Bikes"></UpperView> 
                <ul style={format}>{listItems}</ul>              
            </article>
        )
    }

}