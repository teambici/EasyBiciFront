import React, { Component } from 'react';
import parker from '../img/Parker.jpg';
import { Link } from "react-router-dom";
import CardMedia from '@material-ui/core/CardMedia';

export class ImUser extends Component {
    
    render() {
        const divStyle = {
            display: 'flex',
            alignItems: 'stretccenter',
            JustifyContent: 'space-between'
        };
        return (
            <div className="ImUser">

                <div>
                    <Link to="/profile">back</Link>
                    <h1>HI, I´m Usuario Parker</h1>
                    <h2>Joined in August,2019 </h2>
                </div>
                <div style={divStyle}>
                <div>
                    <CardMedia
                        component="img"
                        width='15%'
                        image={"http://localhost:8080/Image/"+localStorage.getItem("mailLogged")}
                    /> 
                    {/** <img width='15%'src={parker} alt ="mparker" />*/}
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras laoreet lorem nulla, at molestie neque vestibulum nec. Nullam blandit nisi ligula, et fringilla orci euismod ullamcorper. Quisque a eros erat. Aenean elementum blandit tortor, eget semper lectus tempor id. Quisque eu ante posuere, euismod neque sed, porta dolor. Integer maximus eros a commodo ultrices. Phasellus molestie consectetur ex, at blandit tortor. Curabitur posuere, odio pellentesque molestie efficitur, turpis mi aliquam velit, eu condimentum leo nunc sed risus. Vivamus ligula est, placerat in imperdiet id, ornare vel mi. Praesent lectus enim, maximus a magna et, commodo efficitur orci. Cras hendrerit risus a elit accumsan congue. </p>               
                </div>
                </div>

            </div>

        );
    }

}

export default ImUser;