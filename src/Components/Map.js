import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker, Polyline,InfoWindow } from 'google-maps-react';
import Card from '@material-ui/core/Card';
import { GoogleComponent } from 'react-google-location';
import logo from "../img/bikeex2.png";
import InfoWindowEx from "./InfoWindowEx";
import { Redirect } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import axios from 'axios';


const API_KEY = "";
class Maps extends Component {
    constructor(props) {
        super(props)        
        this.state = { place: { lat: 4.6897100, lng: -74.0817500 }, zoom: 13 ,selectBike:null, showingInfoWindow: false,Bikes:[],selectBike:"",
        activeMarker: {}, selectedPlace: {}, goToBike:false };
        this.handleLocation = this.handleLocation.bind(this);
        this.handleBike = this.handleBike.bind(this);
        this.handleOneBike = this.handleOneBike.bind(this);
    }
    componentDidMount() {
        axios.get(`https://easybiciback.herokuapp.com/Cicla`)
          .then(res => {
            const BikesList = res.data;
            this.setState({Bikes: BikesList});           
        })         
    }
    onMarkerClick = (props, marker, e) => {        
        this.setState({
            selectBike:marker.obj,
            selectedPlace: props.place_,
            activeMarker: marker,
            showingInfoWindow: true
        });
      };
    handleOneBike(e){
        this.setState({goToBike:true})    
    
    }

    render() {
        const listItems = this.state.Bikes.map((list,i) =>
            list.disponible && <Marker key={i} position={{lat: list.ubicacion.latitud, lng: list.ubicacion.longitud}} obj={list}  icon={logo} onClick={this.onMarkerClick}/> 
        ); 
        if (this.state.goToBike) {
            return <Redirect to={{
                pathname: '/bike',
                id: this.state.selectBike.id
            }}
            />
        };
        const imagen={
            width: "100px",
            height: "50px"
        }
        const container={
            width: "100px",
            height: "50px",
        }
        const button={
            background: "#81d8d0",
            boxShadow:"none"
        }
       
       
       
        return (
            <div>
                <Card className="insertCard"  >
                    <GoogleComponent                                          
                        apiKey={API_KEY}
                        languaje={"en"}
                        coordinates={true}                        
                    ></GoogleComponent>
                </Card>               
                <Map 
                    google={this.props.google}
                    zoom={this.state.zoom}
                    initialCenter={{ lat: this.state.place.lat, lng: this.state.place.lng }}                 
                    options={{ streetViewControl: false }} 
                    fullscreenControl={false}
                    scaleControl={false}
                    zoomControl={false}>                    
                    {listItems}


                    <InfoWindowEx
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                    >
                        <div>         
                            
                            <img src={"https://easybiciback.herokuapp.com/Image/"+this.state.selectBike.imagen} style={imagen} />
                          
                            <div>
                                <Fab
                                variant="extended"
                                color="primary"                            
                                
                                style={button}
                                onClick={this.handleOneBike}                           
                                >
                                    <RoomServiceIcon  />
                                     {this.state.selectBike.precio} $
                                </Fab>
                            </div>            
                        
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
