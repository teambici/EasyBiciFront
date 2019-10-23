import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import bicicleta from '../img/bicicleta.jpg';
import { height } from '@material-ui/system';
export class Info extends Component {
    render() {        
        const divStyle = {            
            marginTop:"50px",
            width:"70%"
          
        };
        

        return (
            <Card  style={divStyle}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"                        
                        
                        image={bicicleta}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                         </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                           {this.props.parrafo}
                        </Typography>                        
                    </CardContent>
                </CardActionArea>
               
            </Card>
        )
    }
}