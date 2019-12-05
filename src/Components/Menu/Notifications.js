import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import UpperView from '../UpperVIew';
import axios from 'axios';
import { Notification } from '../Notification';
export class Notifications extends Component {
    constructor(props) {
        super(props)
        this.state = { host: false, reservas: [] };
        this.handleButton = this.handleButton.bind(this);
    }
    handleButton(event) {
        this.setState({ host: true });
    }
    componentDidMount() {
        axios.get(`https://easybiciback.herokuapp.com//Reserva/alluser/` + localStorage.getItem("mailLogged"))
            .then(res => {
                const BikesList = res.data;
                this.setState({ reservas: BikesList });
            })
    }

    render() {
        if (this.state.host) {
            return <Redirect to={{
                pathname: '/hostService'
            }}
            />
        }
        const divStyle = {
            margin: "30px"
        };
        const barStyles = {
            //modificar de acuerdo a lo que se defina como color principal
            background: "#81d8d0"
        };
        const contenerdor = {
            margin: 0,
            padding: 0

        }
        const items = this.state.reservas;
        const listItems = items.map((list, i) =>
            <Notification
                key={i}
                res={list}
            />);
        return (
            <article>
                <div>
                    <UpperView title="Notifications" inNoti="true" ></UpperView>
                    <ul style={contenerdor} >{listItems}</ul>
                </div>
            </article>
        )
    }
}