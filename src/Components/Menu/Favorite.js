import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import  BottomMenu  from "../Bottom_Menu"
import { Info } from "../Info"
import { Link } from "react-router-dom";

export class Favorite extends Component {
    constructor(props) {
        super(props)
        this.state = { host: false};
        this.handleButton = this.handleButton.bind(this);
    }
    handleButton(event){
        this.setState({host: true});
    }
    

    render() {
        if (this.state.host){
            return <Redirect to={{
                pathname: '/bike'
            }}
            />
        }
        const divStyle = {
            margin:"30px"
           
        };
        
        return (
            <article>
                <h1>Favorite</h1>
                <div style={divStyle}  onClick={this.handleButton}>
                    <Info title="bicicleta x" parrafo="bicileta x"  />
                </div>
                <div style={divStyle} onClick={this.handleButton}>
                    <Info title="bicicleta y" parrafo=" Alejandro Rodriguez"  component={Link} to="/Services"/>

                </div>                
                <BottomMenu />
            </article>
        )
    }
}