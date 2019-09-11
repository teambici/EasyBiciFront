import React, { Component } from 'react';
import bikerent from '../img/bikerent.jpg';
import {Redirect} from "react-router-dom";

export class Bike extends Component {
    constructor(props) {
        super(props);
        this.state={Check:false}
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck(event) {        
        this.setState({Check: true});
    } 
    render() {        
        if (this.state.Check) {
            return <Redirect to={{
                pathname: '/reserve'               
            }}
            />
        }
        const divStyle = {
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'space-between'
        };        
        return (
            <div>
                <img width='30%' src={bikerent} alt="bike" />
                <h1> Bicicleta X </h1> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet lorem nulla, at molestie neque vestibulum nec. Nullam blandit nisi ligula, et fringilla orci euismod ullamcorper. Quisque a eros erat. Aenean elementum blandit tortor, eget semper lectus tempor id. Quisque eu ante posuere, euismod neque sed, porta dolor. Integer maximus eros a commodo ultrices. Phasellus molestie consectetur ex, at blandit tortor. Curabitur posuere, odio pellentesque molestie efficitur, turpis mi aliquam velit, eu condimentum leo nunc sed risus. Vivamus ligula est, placerat in imperdiet id, ornare vel mi. Praesent lectus enim, maximus a magna et, commodo efficitur orci. Cras hendrerit risus a elit accumsan congue. </p>               
                <div style={divStyle}>
                    <button onClick={this.handleCheck}> Check Availability</button>                                       
                </div>                
            </div>
        )
    }
}

export default Bike;