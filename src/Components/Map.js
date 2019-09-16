import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { GoogleComponent } from 'react-google-location';
import Button from '@material-ui/core/Button';
import { runInThisContext } from 'vm';
import logo from "../img/bikeex2.png"
import parqueadero from "../img/parqueo.png"

const mapStyles = {
    height: "100%"
};
const barStyles={
    marginTop: "60px"
}


const API_KEY = "";
class Maps extends Component {
    constructor(props) {
        super(props)
        this.state = { place: { lat: 4.6897100, lng: -74.0817500 }, zoom: 13 };
        this.handleLocation = this.handleLocation.bind(this);
    }

    render() {
        return (
            <div>
                <Card className="insertCard" style={barStyles} >
                    <GoogleComponent                     
                        apiKey={API_KEY}
                        languaje={"en"}
                        coordinates={true}
                        onChange={this.handleLocation}
                    ></GoogleComponent>
                </Card>
               
                <Map className="map"
                    google={this.props.google}
                    zoom={this.state.zoom}
                    center={{ lat: this.state.place.lat, lng: this.state.place.lng }}
                    style={mapStyles}
                    options={{ streetViewControl: false }}
                >

                    <Marker position={{ lat: 4.784, lng: -74.0417500 }} icon={logo} />
                    <Marker position={{ lat: 4.785, lng: -74.0917500 }} icon={logo} />
                    <Marker position={{ lat: 4.6897100, lng: -74.0817500 }} icon={logo} />
                    <Marker position={{ lat: 4.753254, lng: -74.050950 }} icon={logo} />
                    <Marker position={{ lat: 4.751907, lng: -74.049233 }} icon={logo} />
                    <Marker position={{ lat: 4.752228, lng: -74.053621 }} icon={logo} />
                    <Marker position={{ lat: 4.751202, lng: -74.052859 }} icon={logo} />
                    <Marker position={{ lat: 4.751042, lng: -74.047881 }} icon={logo} />
                    <Marker position={{ lat: 4.752496, lng: -74.048192 }} icon={logo} />

                    <Marker position={{ lat: 4.755831, lng: -74.052339 }} icon={parqueadero} />
                    <Marker position={{ lat: 4.754775, lng: -74.054610 }} icon={parqueadero} />
                    <Marker position={{ lat: 4.754989, lng: -74.065285 }} icon={parqueadero} />
                    <Marker position={{ lat: 4.755278, lng: -74.079919 }} icon={parqueadero} />


                </Map>
                




            </div>
        );
    }
    handleLocation(e) {
        console.log(e.coordinates);
        if (e.coordinates != "") {
            this.setState({ place: { lat: e.coordinates.lat, lng: e.coordinates.lng } });
            this.setState({ zoom: 17 });
        }

        console.log("despues")
        console.log(this.state.place);

    }
}
const MapWrapper = props => (
    <div className="unAbsolute">
        <Map className="map" google={props.google} visible={false}>
            <Maps {...props} />
        </Map>
    </div>
);

export default (GoogleApiWrapper({
    apiKey: API_KEY,
    language: "es",
})(MapWrapper));
