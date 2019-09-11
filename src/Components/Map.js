import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { GoogleComponent } from 'react-google-location';
import Button from '@material-ui/core/Button';
import { runInThisContext } from 'vm';
import logo from "../img/bikeex2.png"




const mapStyles = {
    width: "60%",
    height: "60%",
    left: "20%"
};




const API_KEY = "AIzaSyBCII_xm0kDyjH_nFAvZM6wg5eQF-vnTBw";
class Maps extends Component {
    constructor(props) {
        super(props)
        this.state = { place: { lat: 4.6897100, lng: -74.0817500 } };
        this.handleLocation = this.handleLocation.bind(this);
    }

    render() {
        return (<div>
            <Card className="insertCard">
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="text-todo"
                        label="Buscar Una Cicla"
                        value="{this.state.text}"
                        onChange={this.handleChange}
                        margin="normal"
                    />
                    <GoogleComponent
                        apiKey={API_KEY}
                        languaje={"en"}
                        coordinates={true}
                        onChange={this.handleLocation}
                    ></GoogleComponent>
                    <p></p>


                    <p></p>
                    <Button variant="contained" color="primary" type="submit">
                        Agregar
                            </Button>
                </form>
            </Card>
            <br className="fix" />

            <Map className="map"
                google={this.props.google}
                zoom={13}
                center={{ lat: this.state.place.lat, lng: this.state.place.lng }}
                style={mapStyles}>

                <Marker position={{ lat: 4.784, lng: -74.0417500 }} icon={logo} />
                <Marker position={{ lat: 4.785, lng: -74.0917500 }} icon={logo}/>
                <Marker position={{ lat: 4.6897100, lng: -74.0817500 }} icon={logo}/>
            </Map>

        </div>
        );
    }
    handleLocation(e) {
        console.log(e);
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
