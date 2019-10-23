import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, Polyline,InfoWindow } from 'google-maps-react';
import Card from '@material-ui/core/Card';
import { GoogleComponent } from 'react-google-location';
import logo from "../img/bikeex2.png";
import parqueadero from "../img/parqueo.png";
import InfoWindowEx from "./InfoWindowEx";
const mapStyles = {
    height: "100%"
};
const barStyles={
    marginTop: "58px",
 

}
const API_KEY = "";
class Maps extends Component {
    constructor(props) {
        super(props)
        
        this.state = { place: { lat: 4.6897100, lng: -74.0817500 }, zoom: 13 ,selectBike:null, showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}};
        this.handleLocation = this.handleLocation.bind(this);
        this.handleBike = this.handleBike.bind(this);
    }
    onMarkerClick = (props, marker, e) => {
        this.setState({
          selectedPlace: props.place_,
          activeMarker: marker,
          showingInfoWindow: true
        });
      };
    

    render() {
       
        return (
            <div>
                <Card className="insertCard" style={barStyles} >
                    <GoogleComponent  
                        style={barStyles}                   
                        apiKey={API_KEY}
                        languaje={"en"}
                        coordinates={true}                        
                    >aaaaaaa</GoogleComponent>
                </Card>
               
                <Map className="map"
                    google={this.props.google}
                    zoom={this.state.zoom}
                    initialCenter={{ lat: this.state.place.lat, lng: this.state.place.lng }}
                    style={mapStyles}
                    options={{ streetViewControl: false }} 
                    fullscreenControl={false}
                    scaleControl={false}
                    zoomControl={false}
                >

                    <Marker position={{ lat: 4.784, lng: -74.0417500 }} icon={logo} />
                    <Marker position={{ lat: 4.785, lng: -74.0917500 }} icon={logo}   onClick={this.onMarkerClick}/>
                    <Marker position={{ lat: 4.6897100, lng: -74.0817500 }} icon={logo}  onClick={this.onMarkerClick}/>
                    <Marker position={{ lat: 4.753254, lng: -74.050950 }} icon={logo} onClick={this.onMarkerClick} />
                    <Marker position={{ lat: 4.751907, lng: -74.049233 }} icon={logo} onClick={this.onMarkerClick} />
                    <Marker position={{ lat: 4.752228, lng: -74.053621 }} icon={logo}  onClick={this.onMarkerClick}/>
                    <Marker position={{ lat: 4.751202, lng: -74.052859 }} icon={logo} onClick={this.onMarkerClick}/>
                    <Marker position={{ lat: 4.751042, lng: -74.047881 }} icon={logo}  onClick={this.onMarkerClick}/>
                    <Marker position={{ lat: 4.752496, lng: -74.048192 }} icon={logo}  onClick={this.onMarkerClick}/>

                    <Marker position={{ lat: 4.755831, lng: -74.052339 }} icon={parqueadero} />
                    <Marker position={{ lat: 4.754775, lng: -74.054610 }} icon={parqueadero} />
                    <Marker position={{ lat: 4.754989, lng: -74.065285 }} icon={parqueadero} />
                    <Marker position={{ lat: 4.755278, lng: -74.079919 }} icon={parqueadero} />
                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>
                       
                        <button
                            type="button"
                           
                        >
                            Show details
                        </button>
                        </div>
                    </InfoWindowEx>    
                


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
    handleBike(location){
        this.setState({selectBike:location})        
    
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
