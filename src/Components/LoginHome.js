import React, { Component } from 'react';
import {Redirect} from "react-router-dom";
export class LoginHome extends Component {
    constructor(props) {
        
        super(props);
        this.state={createAcount:'',Loggin:''}
        this.handleLoggin = this.handleLoggin.bind(this);
        this.handleCreateAcount = this.handleCreateAcount.bind(this);
    }
    handleLoggin(event) {
        this.setState({ Loggin: true });
    }
    handleCreateAcount(event) {        
        this.setState({createAcount: true});
    }  

    render() {  
        if (localStorage.getItem("isLoggedin")) {
            return <Redirect to={{
                pathname: '/Services'
            }}
            />
        }
        if (this.state.createAcount) {
            return <Redirect to={{
                pathname: '/name'               
            }}
            />
        }
        if (this.state.Loggin){
            return <Redirect to={{
                pathname: '/login'               
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
                    <button onClick = {this.handleLoggin} >Login</button>                   
                    <button onClick={this.handleCreateAcount}>CreateAcount</button>
                </div>                
            </div>
        )
    }
}
