import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
export class Terms extends Component {
    constructor(props) {
        
        super(props);
        this.state={Accept:false,Decline:false}
        this.handleAccept = this.handleAccept.bind(this);
        this.handleDecline = this.handleDecline.bind(this);
    }
    
    handleAccept(event) {        
        this.setState({Accept: true});
    } 
    handleDecline(event) {        
        this.setState({Decline: true});
    }   

    render() {        
        if (this.state.Accept) {
            return <Redirect to={{
                pathname: '/'               
            }}
            />
        }
        const divStyle = {
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'space-between'
        };        
        const { history } = this.props;
        return (
            <div>
                <h1>BEFORE YOU JOIN</h1> 
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet lorem nulla, at molestie neque vestibulum nec. Nullam blandit nisi ligula, et fringilla orci euismod ullamcorper. Quisque a eros erat. Aenean elementum blandit tortor, eget semper lectus tempor id. Quisque eu ante posuere, euismod neque sed, porta dolor. Integer maximus eros a commodo ultrices. Phasellus molestie consectetur ex, at blandit tortor. Curabitur posuere, odio pellentesque molestie efficitur, turpis mi aliquam velit, eu condimentum leo nunc sed risus. Vivamus ligula est, placerat in imperdiet id, ornare vel mi. Praesent lectus enim, maximus a magna et, commodo efficitur orci. Cras hendrerit risus a elit accumsan congue. </p>               
                <div style={divStyle}>
                    <button> Accept</button>                   
                    <button onClick={this.handleAccept}>Decline</button>
                </div>                
            </div>
        )
    }
}
