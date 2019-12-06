import React, { Component } from 'react';
import UpperView from './UpperVIew';
import "../Components/Confirmed.css";
import { Redirect } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import CancelIcon from '@material-ui/icons/Cancel';
import ContactsIcon from '@material-ui/icons/Contacts';
import Fab from '@material-ui/core/Fab';
import CropFreeIcon from '@material-ui/icons/CropFree';

class Confirmed extends Component {
    constructor(props) {
        super(props);
        this.state = { qrButton: false, map: false, Check: false, booking: false, bike: {}, dueno: {} };
        this.handleqrButton = this.handleqrButton.bind(this);
        this.handlemap = this.handlemap.bind(this);
        this.handleBooking = this.handleBooking.bind(this);
    }
    componentDidMount() {
        axios.get(`https://easybiciback.herokuapp.com/Cicla/` + this.props.location.id)
            .then(res => {
                const BikesList = res.data;
                this.setState({ bike: BikesList });
                axios.get("https://easybiciback.herokuapp.com/User/" + this.state.bike.dueno)
                    .then(due => {
                        this.setState({ dueno: due.data });
                    })
            })
    }
    handleBooking(event) {
        this.setState({ booking: true });
    }
    handleqrButton(event) {
        this.setState({ qrButton: true })
    }
    handlemap(event) {
        this.setState({ map: true })
    }
    render() {
        const color = {
            color: "#EABE3F"
        }
        const barStyles = {
            display: 'block',
            marginTop: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 120,
            height: 120,

        };
        const tipoStyle = {
            marginTop: '35px'
        }
        const inputs = {
            minWidth: "200px",
            width: "70vw"
        };
        const inputs2 = {
            minWidth: "200px",
            width: "70vw",
            marginTop: "50px"
        };
        if (this.state.qrButton) {
            return <Redirect to={{
                pathname: '/qrGenerator'
            }}
            />
        }
        if (this.state.map) {
            return <Redirect to={{
                pathname: '/Services'
            }}
            />
        }
        return (
            <div>
                <UpperView title="Your Bike"></UpperView>
                <div className=" Confirmed">
                    <Avatar style={barStyles} src={"https://easybiciback.herokuapp.com/Image/" + localStorage.getItem("mailLogged")} />
                    <div />
                    <div>
                        <Typography variant="h5" style={tipoStyle} gutterBottom  >
                            {"Usuario: " + this.state.dueno.nombre}
                        </Typography>
                    </div>
                    < div>
                        <div>
                            <Fab variant="extended">
                                <ContactsIcon className="delete" />
                                Contact
                            </Fab>
                            <Fab variant="extended"
                                onClick={this.handlemap}>
                                <CancelIcon className="cance" />
                                Cancel
                            </Fab>
                        </div>
                    </div>
                    <div className="divC">
                        <h6>Precio</h6>
                    </div>
                    <div className="divM">
                        <Fab variant="extended"
                            onClick={this.handleqrButton}>
                            <CropFreeIcon className="qr" />
                            GET YOUR QR CODE
                        </Fab>
                    </div>
                </div>
            </div>

        );
    }

}

export default Confirmed;