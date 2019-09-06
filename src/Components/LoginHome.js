import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
export class LoginHome extends Component {
    constructor(props) {
        
        super(props);
        this.state={createAcount:''}
        this.handleCreateAcount = this.handleCreateAcount.bind(this);
    }
    
    handleCreateAcount(event) {        
        this.setState({createAcount: true});
    }  

    render() {  
        if (this.state.createAcount) {
            return <Redirect to={{
                pathname: '/name'               
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
                <h1>Welcome to EasyBici</h1>                
                <div style={divStyle}>
                    <button >Login</button>                   
                    <button onClick={this.handleCreateAcount}>CreateAcount</button>
                </div>                
            </div>
        )
    }
}
