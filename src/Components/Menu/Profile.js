import React, { Component } from 'react';
import CardProfile from "./CardProfile.js";
import UpperView from '../UpperVIew';
export class Profile extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        const divStyle = {
            display: 'flex',            
            justifyContent: 'space-around',
            alignItems:"center"
        };
        const barStyles = {
            //modificar de acuerdo a lo que se defina como color principal
            background: "#81d8d0"
        };
        return (
            <article>
                
                <div>
                    <UpperView title="Profile"></UpperView>                    
                    <CardProfile ></CardProfile> 
                    
                </div>               
            </article>

        )
    }
}
