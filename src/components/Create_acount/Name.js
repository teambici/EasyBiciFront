import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import {Link} from "react-router-dom";
import "../LoginHome.css"


export class Name extends Component {
    constructor(props) {
        super(props);        
        if(this.props.location.state){
            this.state={first_name:this.props.location.state.first_name,last_name:this.props.location.state.last_name,next:false}
        }else{
            this.state={first_name:'',last_name:'',next:false};
        }
        var flag= false;
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    handleFirstName(event){
        this.setState({first_name: event.target.value});
    };
    handleLastName(event){
        this.setState({last_name: event.target.value});
    };
    handleNext(event){
        if(this.state.first_name && this.state.last_name){            
            this.setState({next: true});
        }
    };
    render() {
        const divStyle = {
            display: 'flex',
            flexDirection:'column',
            justifyContent: 'space-between'
        };
        const nextStyle = {
            position:'absolute',
            bottom:"10%",
            right:"5%",
            height: "45px",
            width: "45px",
            background: "green",
            borderRadius: "50%"
        };
        if(this.state.next){
            console.log("Aaa")
            return <Redirect to={{
                pathname: '/information',     
                state: {first_name:this.state.first_name, last_name:this.state.last_name }          
            }}
            />
        };
          
        return (         
            
            <div className="color_fondo">
                <Link to="/">Back</Link>
                <h1>What's your name?</h1>                
                <div style={divStyle}>
                <label>
                    FIRST NAME
                    <input type="text" name="first_name" value={this.state.first_name}
                    onChange={this.handleFirstName}
                           />
                </label>
                <label>
                    LAST NAME
                    <input type="text" name="last_name" value={this.state.last_name}
                    onChange={this.handleLastName}/>
                </label>
                
                </div>  
                <button className="boton_Next" onClick={this.handleNext}>Next</button>                  
                
                            
            </div>
        )
    }
}