import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, Polyline } from 'google-maps-react';



const mapStyles = {
    width: "60%",
    height: "60%",
    left: "20%"
};




const api="AIzaSyBCII_xm0kDyjH_nFAvZM6wg5eQF-vnTBw";
class Maps extends Component {
    
    
    render() {
        return <Map className="map"
            google={this.props.google}
            zoom={13}
            center={{ lat: 4.6897100, lng: -74.0817500 }}
            style={mapStyles}>

        </Map>;
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
    apiKey: api,
    language: "es",
})(MapWrapper));
