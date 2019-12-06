import React, { Component } from 'react';
import UpperView from './UpperVIew';
import Avatar from '@material-ui/core/Avatar';
import "./Confirmed.css";
import Divider from '@material-ui/core/Divider';
import { Redirect } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import ContactsIcon from '@material-ui/icons/Contacts';
import Fab from '@material-ui/core/Fab';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';


class hostService extends Component {
    constructor(props) {
        super(props);
        this.state = { qrButton: false, notification: false, scan: false, dueno: {} };
        this.handleqrButton = this.handleqrButton.bind(this);
        this.handlenotification = this.handlenotification.bind(this);
        this.handlescan = this.handlescan.bind(this);
    }
    handleqrButton(event) {
        this.setState({ qrButton: true })
    }
    handlenotification(event) {
        this.setState({ notification: true })
    }
    handlescan(event) {
        this.setState({ scan: true })
    }
    whatView() {
        if (this.state.qrButton) {
            return (
                <div>
                    <button className="boton_qr" onClick={this.handlescan}>SCAN QR CODE</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button className="boton_down" onClick={this.handleqrButton}>CONFIRM</button>
                    <button className="boton_down" onClick={this.handlenotification}>DECLINE</button>
                </div>

            )
        }
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
        if (this.state.notification) {
            return <Redirect to={{
                pathname: '/notifications'
            }}
            />
        }
        if (this.state.scan) {
            return <Redirect to={{
                pathname: '/Scanner'
            }}
            />
        }

        return (

            <div>
                <UpperView title="Service"></UpperView>
                <div className=" Confirmed">
                    <Avatar style={barStyles} src={"https://easybiciback.herokuapp.com/Image/" + localStorage.getItem("mailLogged")} />
                    <div />
                    <div>
                        <Typography variant="h5" style={tipoStyle} gutterBottom  >
                            {"Usuario: " + this.state.nombre}
                        </Typography>
                    </div>
                    < div>
                        <div>
                            <Fab variant="extended">
                                <ContactsIcon className="delete" />
                                Contact
                            </Fab>
                        </div>
                    </div>
                    <div className="divC">
                        <h6>Precio</h6>
                    </div>
                    <div className="divC">
                        {this.whatView()}
                    </div>
                </div>
            </div>

        );
    }

}

export default hostService;