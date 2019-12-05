import React from 'react';
import UpperView from '../UpperVIew';
import axios from 'axios';
import { Notification } from '../Notification'
export class Recents extends React.Component {
    constructor(props) {
        super(props)
        this.state = { bike: "" ,reservas: []}
    }

    componentDidMount() {
        axios.get(`https://easybiciback.herokuapp.com//Reserva/user/` + localStorage.getItem("mailLogged"))
            .then(res => {
                const BikesList = res.data;
                this.setState({ reservas: BikesList });
            })
        console.log(this.state.bike)
    }


    render() {
        const items = this.state.reservas;
        const listItems = items.map((list, i) =>
            <Notification
                key={i}
                res={list}
            />);
        const contenerdor = {
            margin: 0,
            padding: 0

        }
       



        return (
            <article >
                <UpperView title="Your Trips"></UpperView>
                <ul style={contenerdor} >{listItems}</ul>
            </article>
        )
    }
}