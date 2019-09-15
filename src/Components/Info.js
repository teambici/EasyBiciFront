import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import bike from '../img/bikeex.png';
export class Info extends Component {
    render() {
        

        return (
            <Card >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={bike}
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