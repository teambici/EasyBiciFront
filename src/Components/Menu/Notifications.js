import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import UpperView from '../UpperVIew';
export class Notifications extends Component {
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
                pathname: '/hostService'
            }}
            />
        }
        const divStyle = {
            margin:"30px"           
        };
        const barStyles = {
            //modificar de acuerdo a lo que se defina como color principal
            background: "#81d8d0"
        };

        return (
            <article>
                <div>
                    <UpperView title="Notifications" inNoti="true" ></UpperView>               
                </div>
            </article>
        )
    }
}