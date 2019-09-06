import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
export class Information extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: this.props.location.state.first_name, last_name: this.props.location.state.last_name,
            email: '', birthday: '', password: '', secondPassword: '',next:false,
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handleBirthday = this.handleBirthday.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSecondPassword = this.handleSecondPassword.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    handleEmail(event) {
        console.log(this.state);        
        this.setState({ email: event.target.value });
    };
    handleBirthday(event) {
        this.setState({ birthday: event.target.value });
    };
    handlePassword(event) {
        this.setState({ password: event.target.value });
    };
    handleSecondPassword(event) {
        this.setState({ secondPassword: event.target.value });
    };
    handleNext(event) {
        event.preventDefault();        
        if(this.state.first_name && this.state.last_name && this.state.password && this.state.password==this.state.secondPassword){
            this.setState({ next: true });
        }
    }
    
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
        if (this.state.next) {
            return <Redirect to={{
                pathname: '/terms',
              
            }}
            />
        }

        

        return (

            <div >
                <Link  to={ {
                pathname: '/name',
                state: {first_name:this.state.first_name, last_name:this.state.last_name }}}>Back</Link>
                <h1>More infomation</h1>

                <form style={divStyle} >
                    <label>
                        EMAIL ADDRESS
                            <input type="email" name="email" value={this.state.email}
                            onChange={this.handleEmail}
                        />
                    </label>
                    <label>
                        BIRTHDAY
                            <input type="date" name="birthday" value={this.state.birthday}
                            onChange={this.handleBirthday}
                        />
                    </label>
                    <label>
                        PASSWORD
                            <input type="password" name="password" value={this.state.password}
                            onChange={this.handlePassword} />
                    </label>
                    <label>
                        REPEAT PASSWORD
                            <input type="password" name="secondPassword" value={this.state.secondPassword}
                            onChange={this.handleSecondPassword} />
                    </label>
                    <button onClick={this.handleNext} style={nextStyle}></button>  
                </form>

                  

            </div>
        )
    }
}